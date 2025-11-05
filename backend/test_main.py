import pytest
from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_settings_status_unconfigured():
    response = client.get("/api/settings/status")
    assert response.status_code == 200
    assert response.json() == {"configured": False}
