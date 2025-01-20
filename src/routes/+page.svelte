<script>
    import { enhance } from "$app/forms";
    import LogosList from "$lib/components/LogosList.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SvelteHead from "$lib/components/SvelteHead.svelte";
    // import { t } from "$lib/translations";
    // export let data;
    const logos = [
        "javascript",
        "typescript",
        "go",
        "expressjs",
        "nestjs",
        "nextjs",
        "sveltejs",
        "mongodb",
        "postgresql",
        "supabase",
        "git",
        "tailwindcss",
    ];
</script>

<SvelteHead />

<div class="hero">
    <div>
        <small>Hi, my name is</small>
        <h1 class="name">Mehrad Behrouzi</h1>
        <h6>
            I'm a fullstack developer focused on
            <strong>backend</strong>
        </h6>
    </div>
</div>

<div class="skills">
    <div class="text">
        <h2>Skills</h2>
        <p>
            I strongly believe programming languages, frameworks and such are
            <strong>not important</strong>
            and are just tools. However this are some of the technologies I'm comfortable
            but not bound to:
        </p>
    </div>
    <LogosList {logos} />
</div>

<div class="projects">
    <h2>Projects</h2>

    <ProjectCard
        name="MehradBz (this site)"
        description="Personal website and Blog with dark/light theme, Persian/English languages
         support,written in SvelteKit with typescript, NeonDB for postgresql database and Drizzle ORM , deployed on vercel using vercel blob storage."
        link="https://github.com/md-bz/mehradbz"
    />
    <ProjectCard
        name="HyperChat"
        description="Chat app backend written in javascript with HyperExpress and Mongodb."
        link="https://github.com/md-bz/Hyper-Chat"
    />
</div>

<div class="contact">
    <h2>Contact</h2>
    <form method="POST" action="?/contact" use:enhance>
        <fieldset>
            <label>
                Name
                <input required type="text" name="name" min="3" max="20" />
            </label>
            <label>
                Email
                <input required type="email" name="email" />
            </label>

            <label>
                Description
                <textarea
                    name="description"
                    rows="5"
                    cols="40"
                    required
                    maxlength="400"
                ></textarea>
            </label>
        </fieldset>
        <input type="submit" value="Send" />
    </form>
</div>

<style>
    .hero {
        font-family: "kanit";
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        height: 70vh;
        padding: 1em;
        margin-bottom: 10em;
    }

    .name {
        font-size: 5em;
        font-weight: 400;
        line-height: 0.9em;
        margin: 0 0 0.8em 0;
        /* padding: 0; */
    }
    small {
        color: var(--pico-primary);
    }

    @media screen and (min-width: 1080px) {
        .skills {
            margin: 5em 0;
            display: flex;
            justify-content: space-between;
        }
        .skills .text {
            max-width: 30%;
        }
    }

    strong {
        color: var(--pico-primary);
    }
    .projects {
        padding: 5em 0;
        display: grid;
        gap: 1em;
    }
</style>
