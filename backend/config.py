import os
import yaml
from pydantic import BaseModel, Field
from typing import List, Dict

class Provider(BaseModel):
    name: str
    url: str
    enabled: bool

class Settings(BaseModel):
    tmdb_key: str
    realdebrid_key: str
    premiumize_key: str
    providers: List[Provider] = Field(default_factory=lambda: [
        Provider(name="Example Provider 1", url="https://example-provider1.com/search?q={query}", enabled=True),
        Provider(name="Example Provider 2", url="https://example-provider2.com/search?q={query}", enabled=True),
    ])

CONFIG_DIR = os.getenv("CONFIG_DIR", "/app/config")
CONFIG_PATH = os.path.join(CONFIG_DIR, "config.yaml")

def load_config() -> Settings | None:
    if not os.path.exists(CONFIG_PATH):
        return None
    with open(CONFIG_PATH, "r") as f:
        config_data = yaml.safe_load(f)
    return Settings(**config_data)

def save_config(settings: Settings):
    os.makedirs(CONFIG_DIR, exist_ok=True)
    with open(CONFIG_PATH, "w") as f:
        yaml.dump(settings.dict(), f)

settings = load_config()
