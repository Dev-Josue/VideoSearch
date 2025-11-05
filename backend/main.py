from fastapi import FastAPI, HTTPException, status, BackgroundTasks
from pydantic import BaseModel
from typing import List, Literal

from backend.config import Settings, settings, save_config, load_config, Provider
from backend.scrapers import helios
from backend.download import monitor_download
import aiohttp

app = FastAPI()

class SourceLink(BaseModel):
    title: str
    quality: str
    size: str
    service: Literal["real-debrid", "premiumize"]
    link: str

class DownloadRequest(BaseModel):
    link: str
    service: Literal["real-debrid", "premiumize"]
    tmdb_id: int
    media_type: str

async def get_tmdb_metadata(tmdb_id: int, media_type: str) -> dict:
    if not settings or not settings.tmdb_key:
        raise HTTPException(status_code=500, detail="TMDB API key not configured")

    url = f"https://api.themoviedb.org/3/{media_type}/{tmdb_id}?api_key={settings.tmdb_key}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            if response.status == 200:
                return await response.json()
            else:
                raise HTTPException(status_code=response.status, detail="Failed to fetch TMDB metadata")


@app.get("/api/health")
def read_root():
    return {"status": "ok"}

@app.get("/api/settings/tmdb_key")
async def get_tmdb_key():
    if not settings or not settings.tmdb_key:
        raise HTTPException(status_code=500, detail="TMDB API key not configured")
    return {"tmdb_key": settings.tmdb_key}

@app.get("/api/settings/status")
async def get_settings_status():
    if settings:
        return {"configured": True}
    else:
        return {"configured": False}

@app.get("/api/settings/providers", response_model=List[Provider])
async def get_providers():
    if not settings:
        return []
    return settings.providers

@app.post("/api/settings/save")
async def save_settings(new_settings: Settings):
    if not all([new_settings.tmdb_key, new_settings.realdebrid_key, new_settings.premiumize_key]):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="All API keys are required.",
        )

    save_config(new_settings)

    global settings
    settings = load_config()

    if settings is None:
         raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to save or reload settings.",
        )

    return {"message": "Settings saved successfully."}

@app.get("/api/sources/{tmdb_id}", response_model=List[SourceLink])
async def get_sources(tmdb_id: int, media_type: Literal["movie", "tv"]):
    metadata = await get_tmdb_metadata(tmdb_id, media_type)

    if media_type == "movie":
        title = metadata.get("title")
        year = metadata.get("release_date", "")[:4]
        query = f"{title} {year}"
    else: # tv
        title = metadata.get("name")
        year = metadata.get("first_air_date", "")[:4]
        query = f"{title} {year}"

    sources = await helios.scrape_sources(query)
    return sources

@app.post("/api/download/initiate")
async def initiate_download(request: DownloadRequest, background_tasks: BackgroundTasks):
    metadata = await get_tmdb_metadata(request.tmdb_id, request.media_type)

    if request.media_type == "movie":
        title = metadata.get("title")
        year = metadata.get("release_date", "")[:4]
        filepath = f"/media/Movies/{title} ({year})/{title} ({year}).mkv"
    else: # tv
        show_title = metadata.get("name")
        # In a real implementation, you would get season/episode from the request
        season = "01"
        episode = "01"
        episode_title = "Episode Title"
        filepath = f"/media/TV/{show_title}/Season {season}/{show_title} - S{season}E{episode} - {episode_title}.mkv"

    # In a real implementation, you would add the link to the Debrid service
    # and get back a debrid_id.
    debrid_id = "dummy_id"

    background_tasks.add_task(monitor_download, request.service, debrid_id, filepath)

    return {"message": f"Download initiated for {request.link} via {request.service}"}
