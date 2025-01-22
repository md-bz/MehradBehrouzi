<script>
    import { enhance } from "$app/forms";
    import LogosList from "$lib/components/LogosList.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SvelteHead from "$lib/components/SvelteHead.svelte";
    import { t } from "$lib/translations";
    let { data, form } = $props();

    let formIsLoading = $state(false);

    const logos = [
        { name: "javascript" },
        { name: "typescript" },
        { name: "go" },
        { name: "expressjs", lightTheme: "expressjs-dark" },
        { name: "nestjs" },
        { name: "nextjs" },
        { name: "sveltejs" },
        { name: "mongodb" },
        { name: "postgresql" },
        { name: "supabase" },
        { name: "git" },
        { name: "tailwindcss" },
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
    <LogosList theme={data.theme} {logos} />
</div>

<div class="projects">
    <h2>{$t("home.projects.title")}</h2>
    <div class="project_container">
        <ProjectCard
            name="MehradBz"
            description={$t("home.projects.MehradBz.description")}
            theme={data.theme}
            link="https://github.com/md-bz/mehradbz"
        />
        <ProjectCard
            name="HyperChat"
            description={$t("home.projects.HyperChat.description")}
            theme={data.theme}
            link="https://github.com/md-bz/Hyper-Chat"
        />
    </div>
</div>

<div class="contact">
    <h2>{$t("contact.form.title")}</h2>
    <form
        method="POST"
        action="?/contact"
        use:enhance={() => {
            formIsLoading = true;
            return ({ update }) => {
                formIsLoading = false;
                update();
                setTimeout(() => {
                    // @ts-ignore
                    form = { ...form, success: false, serverError: false };
                }, 5000);
            };
        }}
    >
        {#if form?.serverError}
            <b style="color: var(--pico-del-color);"
                >{$t("contact.form.serverError")}</b
            >
        {/if}
        {#if form?.success}
            <b style="color: var(--pico-ins-color);">
                {$t("contact.form.success")}
            </b>
        {/if}
        <fieldset>
            <label>
                {$t("contact.form.name")}
                <input
                    required
                    type="text"
                    name="name"
                    min="3"
                    style="background-position: {data.lang === 'en'
                        ? 'right'
                        : 'left'} 10px center;"
                    autocomplete="name"
                    max="20"
                    aria-invalid={form?.nameIsInvalid}
                    aria-describedby="name-invalid"
                />
                {#if form?.nameIsInvalid}
                    <small id="name-invalid">
                        {$t(
                            form.missing
                                ? "contact.name.required"
                                : "contact.name.invalid",
                        )}
                    </small>
                {/if}
            </label>

            <label>
                {$t("contact.form.email")}
                <input
                    required
                    autocomplete="email"
                    style="background-position: {data.lang === 'en'
                        ? 'right'
                        : 'left'} 10px center;"
                    type="email"
                    name="email"
                    aria-invalid={form?.emailIsInvalid}
                    aria-describedby="email-invalid"
                />
                {#if form?.emailIsInvalid}
                    <small id="email-invalid">
                        {$t(
                            form.missing
                                ? "contact.email.required"
                                : "contact.email.invalid",
                        )}
                    </small>
                {/if}
            </label>

            <label>
                {$t("contact.form.description")}
                <textarea
                    name="description"
                    rows="5"
                    cols="40"
                    autocomplete="off"
                    style="background-position: {data.lang === 'en'
                        ? 'right'
                        : 'left'} 5px top !important;"
                    required
                    maxlength="400"
                    aria-invalid={form?.descriptionIsInvalid}
                    aria-describedby="description-invalid"
                ></textarea>
                {#if form?.descriptionIsInvalid}
                    <small id="description-invalid">
                        {$t(
                            form.missing
                                ? "contact.description.required"
                                : "contact.description.invalid",
                        )}
                    </small>
                {/if}
            </label>
        </fieldset>
        <button type="submit" aria-busy={formIsLoading}>
            {$t("contact.form.send")}
        </button>
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
    .hero small {
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
