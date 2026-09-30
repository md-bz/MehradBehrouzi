// Universal hook: runs on the server AND in the browser, so it must stay pure.
// /fa/blog -> /blog for route matching; page.url keeps the real /fa/blog.
export function reroute({ url }: { url: URL }): string | undefined {
    const match = /^\/(fa|en)(\/.*)?$/.exec(url.pathname);
    if (match) return match[2] || "/";
}
