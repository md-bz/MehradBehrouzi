<script lang="ts">
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
</script>

<Breadcrumb />
{@render children?.()}
