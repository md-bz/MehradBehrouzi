<script lang="ts">
    let { name, description, link } = $props();
</script>

<article>
    <h3>{name}</h3>
    <p>{description}</p>
    <footer>
        <a href={link}>
            <img src="/github.svg" alt="github" />
        </a>
    </footer>
</article>

<style>
    img {
        width: 35px;
        height: 35px;
    }
    footer a {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    h3 {
        text-align: center;
    }
</style>
