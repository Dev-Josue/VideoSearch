import aiohttp
from backend.config import settings

async def check_cache(hashes: list[str]):
    if not settings or not settings.premiumize_key:
        return {}

    params = {"items[]": hashes, "apikey": settings.premiumize_key}
    async with aiohttp.ClientSession() as session:
        url = "https://www.premiumize.me/api/torrent/check"
        async with session.post(url, data=params) as response:
            if response.status == 200:
                data = await response.json()
                # Premiumize returns a list of booleans, so we need to map it back to the hashes
                return {h: data["response"][i] for i, h in enumerate(hashes)}
            else:
                return {}
