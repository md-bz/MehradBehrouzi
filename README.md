# Blog-Svelte

## Overview

This project is a blog platform built using [SvelteKit](https://kit.svelte.dev/) with user authentication, blog post creation using markdown, and SQLite as the database. The platform allows users to sign up, log in, and create markdown-based blog posts, which are stored as HTML files.

A **User Management API** is required to handle user authentication and authorization.

## Features

-   **User Authentication**: The app interacts with a User Management API for user login, registration, and authentication.
-   **Markdown Support**: Blog posts are uploaded in markdown format and converted to HTML using `markdown-it`.
-   **File Upload**: Supports file uploads of markdown files for blog posts, with size restrictions (max 5MB).
-   **SQLite Database**: Managed with `better-sqlite3` and Drizzle ORM to store blog post metadata like author and description.
-   **Dynamic Routing**: Blog posts are accessible via dynamic routes like `[slug]`.
-   **Pico CSS**: Simple and minimal CSS framework is used for styling.

## Prerequisites

-   **User Management API**: The project requires an API that handles user authentication and provides JWT tokens. This API should support the following endpoints:
    -   `/users/login`: for logging in and obtaining a JWT.
    -   `/users/signup: for sign up.
    -   `/users/me`: for retrieving user data based on the JWT.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd blog-svelte
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the database:
    ```bash
    npm run db:push
    ```

## Environment Variables

You'll need to set up environment variables for interacting with your User Management API. Add the following to your `.env` file:

```bash
VITE_API_URL=<your_user_management_api_url>
```

This variable is used to interact with the authentication API for login and user data retrieval.

## Development

To start the development server, run:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the project for production.
-   `npm run preview`: Previews the production build.
-   `npm run check`: Runs type checking and synchronizes SvelteKit.
-   `npm run db:push`: Pushes database schema changes.
-   `npm run db:migrate`: Applies migrations to the database.
-   `npm run db:studio`: Opens the database studio for managing your schema interactively.

## Features in Detail

### Authentication

-   **Login**: The login form collects the user's email and password, sends them to the `/users/login` endpoint of the API, and receives a JWT token. The token is stored in cookies for session management.
-   **Protected Routes**: Routes like `/create` are protected, requiring the user to be authenticated. The JWT token is validated to ensure the user has the right access.

### Markdown Blog Posts

-   **File Upload**: Users can upload blog posts in markdown format (with a `.md` extension). The file is processed on the server, and the markdown content is converted into HTML using `markdown-it`.
-   **Size Limit**: Uploaded markdown files must not exceed 5MB.
-   **Slug Generation**: A unique slug is generated for each post based on the author and post name. The post is then stored as an HTML file in the `static/blog` directory.
-   **Database**: Metadata for each post, including the post name, description, author, and slug, is stored in the SQLite database using Drizzle ORM.

### Example Routes

-   `/login`: User login page.
-   `/signup`: User registration page.
-   `/create`: Page for creating a new blog post (requires authentication).
-   `/[slug]`: Dynamic route to display individual blog posts.

## Dependencies

-   **SvelteKit**: Framework for building modern web apps.
-   **Vite**: Build tool for development and production.
-   **Better-SQLite3**: A fast and simple SQLite library for Node.js.
-   **Drizzle ORM**: Type-safe SQL ORM for querying your SQLite database.
-   **Markdown-it**: Fast markdown parser for rendering blog content.
-   **Pico CSS**: Lightweight CSS framework for minimal styling.

## Folder Structure

-   `/src/routes`: Contains the app routes like login, signup, and dynamic blog post routes.
    -   `+layout.svelte`: Layout component for consistent page structure.
    -   `+page.svelte`: Main page for listing blog posts or content.
    -   `[slug]`: Dynamic route for individual blog posts.
    -   `create`: Route for uploading markdown files to create new blog posts.

## License

This project is licensed under the MIT License.

---

This README should now reflect the new functionality and dependencies of your Svelte blog project. Let me know if you'd like any further adjustments!
