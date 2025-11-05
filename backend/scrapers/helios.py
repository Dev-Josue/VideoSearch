import asyncio
import re
from typing import List, Tuple
from backend.services import realdebrid, premiumize
from backend.config import settings

def parse_title(title: str) -> Tuple[str, str, str]:
    quality_match = re.search(r'(2160p|1080p|720p|480p)', title)
    quality = quality_match.group(1) if quality_match else "Unknown"

    size_match = re.search(r'(\d+(\.\d+)?\s*(GB|MB))', title, re.IGNORECASE)
    size = size_match.group(1) if size_match else "Unknown"

    clean_title = re.sub(r'\[.*?\]|\(.*?\)|(2160p|1080p|720p|480p)|(\d+(\.\d+)?\s*(GB|MB))', '', title).strip()

    return clean_title, quality, size

async def scrape_sources(query: str) -> List[dict]:
    if not settings:
        return []

    enabled_providers = [p for p in settings.providers if p.enabled]

    # In a real implementation, this would involve making HTTP requests to the enabled_providers
    # and parsing the results to extract magnet links.

    dummy_magnets = [
        "magnet:?xt=urn:btih:d1e4038a6a5d4915a97577f88f1e1c7a52e1d7a8&dn=Example Movie (2023) [1080p] [1.5 GB]",
        "magnet:?xt=urn:btih:f3b2e1b1b4b5b6b7b8b9bacbdbebf0c1c2d3e4f5&dn=Example Movie (2023) [720p] [800 MB]",
        "magnet:?xt=urn:btih:a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0&dn=Another Movie (2022) [2160p] [5.2 GB]"
    ]

    sources = []
    hashes = [re.search(r'btih:([a-zA-Z0-9]{40})', magnet).group(1) for magnet in dummy_magnets]

    rd_cache, pm_cache = await asyncio.gather(
        realdebrid.check_cache(hashes),
        premiumize.check_cache(hashes)
    )

    for i, magnet in enumerate(dummy_magnets):
        title, quality, size = parse_title(magnet)

        if rd_cache.get(hashes[i]):
            sources.append({"title": title, "quality": quality, "size": size, "service": "real-debrid", "link": magnet})
        if pm_cache.get(hashes[i]):
            sources.append({"title": title, "quality": quality, "size": size, "service": "premiumize", "link": magnet})

    return sources
