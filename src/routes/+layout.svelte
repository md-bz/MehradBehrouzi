<script>
    export let data;
</script>

<body>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/">Bloggy</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/about">About</a>
                </li>

                {#if data.session?.user}
                    <li><a href="/create">Create</a></li>
                {/if}
            </ul>
        </nav>
    </header>

    <main>
        <slot></slot>
    </main>
</body>
