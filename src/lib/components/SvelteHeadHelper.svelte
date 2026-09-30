<script>
	const { title, description } = $props();
	import { page } from '$app/state';

	// same page, other language: /fa/blog <-> /en/blog
	let bare = $derived(page.url.pathname.replace(/^\/(fa|en)/, '') || '/');
	let suffix = $derived(bare === '/' ? '' : bare);
	let fa = $derived(page.url.origin + '/fa' + suffix);
	let en = $derived(page.url.origin + '/en' + suffix);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={page.url.href} />
	<link rel="alternate" hreflang="fa" href={fa} />
	<link rel="alternate" hreflang="en" href={en} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
</svelte:head>
