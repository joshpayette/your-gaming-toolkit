# Local setup

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [VSCode](https://code.visualstudio.com/download) (recommended) or another code editor

## If you don't have MySQL installed locally...
- [Docker](https://docs.docker.com/get-docker/)
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## First Time Setup

In a terminal, run the following commands:

```sh
# Install dependencies
pnpm install

# Create a network so containers can communicate
docker network create ygt_network

# # Build prod using new BuildKit engine
# COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

## Running in development

In a terminal, run the following commands:

```sh
# Start the database container
docker-compose -f docker-compose.yml up -d mysql

# Start the app in development mode
pnpm dev
```