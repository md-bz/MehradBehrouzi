<script>
    import LogosList from "$lib/components/LogosList.svelte";
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
    <h2>Skills</h2>
    <p>
        I strongly believe programming languages, frameworks and such are
        <strong>not important</strong>
        and are just tools. However this are some of the technologies I'm comfortable
        but not bound to:
    </p>
    <LogosList {logos} />
</div>

<div>
    <ul class="projects">
        <li>HyperChat</li>
        <li>SecureFileStorage</li>
        <li>SpottyDl bot</li>
        <li>MehradBz (this site)</li>
    </ul>
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
    .skills {
        margin: 5em 0;
    }
    strong {
        color: var(--pico-primary);
    }
</style>
