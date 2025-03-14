<script>
	const { title, description } = $props();
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={page.url.href} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
</svelte:head>
