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
        "mongodb",
        "postgresql",
        "git",
        "supabase",
        "sveltejs",
        "tailwindcss",
    ];
</script>

<SvelteHead />

<div class="hero">
    <div>
        <small>Hi, my name is</small>
        <h1 class="name"><strong>Mehrad Behrouzi</strong></h1>
        <h5>I'm a fullstack developer focused on backend.</h5>
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

<ul class="projects">
    //todo :add this projects
    <li>HyperChat</li>
    <li>SecureFileStorage</li>
    <li>SpottyDl bot</li>
    <li>MehradBz (this site)</li>
</ul>

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
    }
    .name {
        font-size: 3em;
        margin: 0;
        /* padding: 0; */
    }
    small {
        color: var(--pico-primary);
    }
    .skills strong {
        color: var(--pico-primary);
    }
</style>
