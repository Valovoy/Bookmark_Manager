# Project: Bookmark Manager

## Description

A bookmark management application that allows you to:

- Add images to folders.
- Delete images from folders.
- Save data to local storage.

## Technology stack

- React
- TypeScript
- CSS Modules
- Context API

## How to start a project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the project in development mode:
   ```bash
   npm run dev
   ```
3. To build the project:
   ```bash
   npm run build
   ```

## Running the project with Docker

1. Prerequisites

- Docker must be installed on your computer.

2. Build the Docker image
   To build the Docker image, navigate to the project directory and run:

   ```bash
   docker build -t bookmark-manager .
   ```

   - `-t bookmark-manager` - sets the name for the created image.
   - `.` — points to the current directory where the Dockerfile is located.

3. Run the project using Docker
   To run the project in a Docker container, use the following command:

   ```bash
   docker run -d -p 3000:3000 \
   -v "$(pwd):/app" \
   -v /app/node_modules \
   --env-file ./.env \
   bookmark-manager
   ```

   This command will:

   - Run the container in the background `(-d)`.
   - Expose port 3000 on your host machine to port 3000 in the container `(-p 3000:3000)`.
   - Mount the current directory `($(pwd))` as /app inside the container so that your local changes are reflected immediately inside the container.
   - Mount the node_modules directory inside the container to avoid re-installing dependencies on the host system.
   - Load environment variables from the .env file.

   Once the container is running, you can access the application in your browser at http://localhost:3000.
