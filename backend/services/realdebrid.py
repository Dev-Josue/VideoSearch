import aiohttp
from backend.config import settings

async def check_cache(hashes: list[str]):
    if not settings or not settings.realdebrid_key:
        return {}

    headers = {"Authorization": f"Bearer {settings.realdebrid_key}"}
    async with aiohttp.ClientSession() as session:
        # Real-Debrid API takes hashes as path segments
        url = f"https://api.real-debrid.com/rest/1.0/torrents/instantAvailability/{'/'.join(hashes)}"
        async with session.get(url, headers=headers) as response:
            if response.status == 200:
                return await response.json()
            else:
                return {}
