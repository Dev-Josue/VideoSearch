# Self-Hosted Debrid Downloader

This is a self-hosted Debrid downloader that integrates with Real-Debrid and Premiumize.

## Docker Compose

To run this application using Docker Compose, you will need to have Docker and Docker Compose installed on your machine.

### Configuration

1.  **Locate the example configuration file:** In the root of this project, you will find a file named `config.yaml.example`.
2.  **Copy the file:** Copy `config.yaml.example` to the configuration directory you specified in your `docker-compose.yml` file (e.g., `/volume2/docker/config/videosearch`) and rename it to `config.yaml`.
3.  **Edit the file:** Open the new `config.yaml` file and replace the placeholder values with your actual API keys. You will need to get a free API key from [TMDB](https://www.themoviedb.org/documentation/api) for metadata.

**Important:** All API key fields must be filled in. Do not leave any of them blank.

Your final `config.yaml` should look like this:
```yaml
tmdb_key: "YOUR_TMDB_API_KEY"
realdebrid_key: "YOUR_REALDEBRID_API_KEY"
premiumize_key: "YOUR_PREMIUMIZE_API_KEY"
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
