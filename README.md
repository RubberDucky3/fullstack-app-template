Fullstack App with Docker
=========================

This is a fullstack application with a frontend and a backend, along with a PostgreSQL database, all set up using Docker Compose.

Prerequisites
-------------

Before you start, ensure that you have the following installed:

-   Docker
-   Docker Compose

Getting Started
---------------

Follow the steps below to get the project up and running using Docker.

### 1\. Clone the Repository

First, clone the repository to your local machine.

bash

CopyEdit

`git clone https://github.com/RubberDucky3/fullstack-app-template.git
cd fullstack-app-template`

### 2\. Create a `.env` File for Database Configuration

In the root of the project, create a `.env` file with the following content to configure the database connection:

bash

CopyEdit

`DB_HOST=db
DB_PORT=5432
DB_NAME=mydb
DB_USER=myuser
DB_PASSWORD=mypassword`

You can customize these values as per your needs.

### 3\. Build and Start the Containers

To start the application with Docker Compose, run the following command:

bash

CopyEdit

`docker-compose up --build`

This will build the images for the frontend, backend, and database, and start all the services defined in the `docker-compose.yml` file.

### 4\. Access the Application

-   **Frontend**: Go to `http://localhost:3000` to view the frontend.
-   **Backend**: The API is running on `http://localhost:5000`.
-   **PostgreSQL Database**: The database is running inside a Docker container, and you can connect to it using the credentials defined in the `.env` file.

### 5\. Verify the Database

Once the containers are running, you can check if the backend is able to connect to the PostgreSQL database. The `/users` endpoint should return user data.

bash

CopyEdit

`curl http://localhost:5000/users`

### 6\. Stopping the Application

To stop the running containers, you can press `Ctrl+C` or run:

bash

CopyEdit

`docker-compose down`

This will stop the containers and remove them.
