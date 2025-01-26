# Mehradbz Personal Website

Welcome to the repository for my personal website! This is a minimalist website currently featuring a blog section where I share thoughts, ideas, and insights.

## Project Details

-   **Name:** mehradbz
-   **Framework:** [SvelteKit](https://kit.svelte.dev/)
-   **Database:** [Drizzle ORM](https://orm.drizzle.team/) with NeonDB
-   **Markdown Rendering:** Powered by [markdown-it](https://github.com/markdown-it/markdown-it) and [telegramify-markdown](https://github.com/sudoskys/telegramify-markdown) for telegram markdown rendering

## Features

-   **Blog Section:** A space to publish and showcase articles.
-   **Localization Support:** Managed via [sveltekit-i18n](https://github.com/sveltekit-i18n/sveltekit-i18n) fo multilingual capabilities.
-   **Markdown-Driven Content:** Blog content is written in Markdown for simplicity.
-   **Database Management:** Using `drizzle-kit` for schema migrations and database operations.

## Tech Stack

### Frontend

-   **Framework:** SvelteKit
-   **Styling:** pico css for now
-   **Localization:** sveltekit-i18n

### Backend

-   **Database ORM:** Drizzle ORM
-   **Database:** NeonDB
-   **Authentication:** @auth/sveltekit with GitHub OAuth
-   **File Management:** @vercel/blob

## Getting Started

To get started with the project locally:

1. Clone this repository:
    ```bash
    git clone https://github.com/md-bz/MehradBz
    cd MehradBz
    ```
1. install dependencies
    ```bash
    npm install
    ```
1. Copy `.env.example` to `.env` and fill in the required values(make sure to use sqlite with master branch and neondb with vercel branch)

1. Initialize the database:

    ```bash
    npm run db:push
    ```

1. Run the development server:
    ```bash
    npm run dev
    ```

## License

This project is licensed under the Gnu v3.0.
