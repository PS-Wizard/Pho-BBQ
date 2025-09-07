<script lang="ts">

  let { image, title, description, href = "" } = $props();
</script>

<a {href} class="block w-full overflow-hidden space-y-2">
  <img src={image} alt={title} class="w-full h-[24em] object-cover" />
  <div class="gap-2 flex flex-col">
    <p class="text-2xl tracking-wide">
      {title}
    </p>
    <p class="text-[14px] text-neutral-500 tracking-wide w-full sm:inline">
      {description}
    </p>
  </div>
</a>
