<script lang="ts">
    import TextMask from "./TextMask.svelte";

    let { image, title, description, href = "" } = $props();
</script>

<a {href} class="block w-full overflow-hidden space-y-4">
    <img src={image} alt={title} class="w-full h-[32em] object-cover" />
    <div class="gap-2 flex flex-col">
        <TextMask styles="text-2xl clash tracking-wide">
            {title}
        </TextMask>
        <TextMask styles="text-neutral-500 tracking-wide w-full sm:inline">
            {description}
        </TextMask>
    </div>
</a>
