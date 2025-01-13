<script>
    export let theme = "light"; // Default theme is light
</script>

<div class="icon {theme}">
    <div class="sun"></div>
    <div class="moon"></div>
</div>

<style>
    .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--icon-bg);
        overflow: hidden;
        position: relative;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 0 20px var(--icon-bg); /* General shadow for the container */
    }

    .icon.light {
        --icon-bg: #ffd700; /* Sun yellow */
    }

    .icon.dark {
        --icon-bg: #b8b8b8; /* Moon gray */
    }

    .sun,
    .moon {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        transition:
            transform 0.3s ease-in-out,
            opacity 0.3s ease-in-out;
    }

    .sun {
        background-color: #ffd700;
        transform: scale(1);
    }

    .moon {
        background-color: #b8b8b8;
        transform: scale(0);
    }

    .icon.light .sun {
        transform: scale(1);
        opacity: 1;
    }

    .icon.light .moon {
        transform: scale(0);
        opacity: 0;
    }

    .icon.dark .sun {
        transform: scale(0);
        opacity: 0;
    }

    .icon.dark .moon {
        transform: scale(1);
        opacity: 1;
    }
</style>
