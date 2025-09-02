<script lang="ts">
    import ImageMask from "./ImageMask.svelte";
    import TextMask from "./TextMask.svelte";

    let { image, title, description, href = "" } = $props();
</script>

<a {href} class="block w-full overflow-hidden space-y-4">
    <ImageMask
        link={image}
        alt={title}
        styles="w-full h-64 md:h-200 object-cover"
    />
    <div class="gap-2 flex flex-col">
        <TextMask styles="text-4xl clash tracking-wide">
            {title}
        </TextMask>
        <TextMask styles="text-neutral-500 tracking-wide w-full sm:inline">
            {description} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur quisquam adipisci repudiandae? Nisi ipsum hic iusto reprehenderit
            facilis ullam at adipisci repellat ad impedit, fugiat voluptatum aliquid
            nemo aspernatur quibusdam!
        </TextMask>
    </div>
</a>
