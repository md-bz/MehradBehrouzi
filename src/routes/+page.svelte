<script>
    import { enhance } from "$app/forms";
    import LogosList from "$lib/components/LogosList.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SvelteHead from "$lib/components/SvelteHead.svelte";
    import { t } from "$lib/translations";
    export let data;
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

<div class="hero" style="text-align: {data.lang === 'en' ? 'left' : 'right'};">
    <div>
        <small>{$t("home.hero.subtitle")}</small>
        <h1 class="name">{$t("home.hero.name")}</h1>
        <h6>
            {@html $t("home.hero.description")}
        </h6>
    </div>
</div>

<div class="skills">
    <div class="text">
        <h2>{$t("home.skills.title")}</h2>
        <p>
            {@html $t("home.skills.description")}
        </p>
    </div>
    <LogosList {logos} />
</div>

<div class="projects">
    <h2>{$t("home.projects.title")}</h2>
    <div class="project_container">
        <ProjectCard
            name="MehradBz"
            description={$t("home.projects.MehradBz.description")}
            link="https://github.com/md-bz/mehradbz"
        />
        <ProjectCard
            name="HyperChat"
            description={$t("home.projects.HyperChat.description")}
            link="https://github.com/md-bz/Hyper-Chat"
        />
    </div>
</div>

<div class="contact">
    <h2>{$t("home.contact.title")}</h2>
    <form method="POST" action="?/contact" use:enhance>
        <fieldset>
            <label>
                {$t("home.contact.name")}
                <input required type="text" name="name" min="3" max="20" />
            </label>
            <label>
                {$t("home.contact.email")}
                <input required type="email" name="email" />
            </label>

            <label>
                {$t("home.contact.description")}
                <textarea
                    name="description"
                    rows="5"
                    cols="40"
                    required
                    maxlength="400"
                ></textarea>
            </label>
        </fieldset>
        <input type="submit" value={$t("home.contact.send")} />
    </form>
</div>

<style>
    .hero {
        font-family: "kanit";
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 70vh;
        padding: 1em;
        margin-bottom: 10em;
    }

    .name {
        font-size: 5em;
        font-weight: 400;
        line-height: 0.9em;
        margin: 0 0 0.8em 0;
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

    .projects {
        padding: 5em 0;
        justify-content: center;
    }
    .project_container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5vw;
        justify-content: space-around;
    }
    @media screen and (max-width: 960px) {
        .project_container {
            grid-template-columns: 1fr;
        }
    }
</style>
