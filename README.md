# Self-Hosted Debrid Downloader

This is a self-hosted Debrid downloader that integrates with Real-Debrid and Premiumize.

## Docker Compose

To run this application using Docker Compose, you will need to have Docker and Docker Compose installed on your machine.

### Configuration

1.  Create a `config.yaml` file in the configuration directory you specified in the `docker-compose.yml` file (`/volume2/docker/config/videosearch` in the provided example).
2.  Add your Real-Debrid and/or Premiumize API keys to the `config.yaml` file. See the example below:

```yaml
debrid:
  realdebrid_api_key: "YOUR_REALDEBRID_API_KEY"
  premiumize_api_key: "YOUR_PREMIUMIZE_API_KEY"
```

### Usage

1.  Clone this repository to your machine.
2.  Navigate to the root of the repository.
3.  Run the following command to build and start the application. If you encounter a "permission denied" error, you may need to run the command with `sudo`.

```bash
sudo docker compose up -d --build
```

_Note: Depending on your system's configuration, you may need to use `docker-compose` (with a hyphen) instead of `docker compose`._

4.  The application will be available at `http://[your-nas-ip]:1013`.

To stop the application, run the following command:

```bash
sudo docker compose down
```
