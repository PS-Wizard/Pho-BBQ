<script lang="ts">
    import { isActive } from "$lib/utils/utils";
    import { animate } from "motion";
    function animateMe(el: HTMLElement) {
        animate(
            el,
            { y: ["100vh", "0vh"], scale: [0, 1] },
            { duration: 0.5, delay: 1, ease: "easeOut" },
        );
    }
</script>

<nav
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black px-8 py-4 flex gap-8 rounded-xl z-50"
    {@attach animateMe}
>
    <a
        href="/"
        class="text-white font-sans hover:text-gray-300 flex items-center gap-1"
    >
        {#if isActive("/")}
            <span class="text-white text-xs">•</span>
        {/if}
        HOME
    </a>
    <a
        href="/about"
        class="text-white font-sans hover:text-gray-300 flex items-center gap-1"
    >
        {#if isActive("/about")}
            <span class="text-white text-xs">•</span>
        {/if}
        ABOUT
    </a>
    <a
        href="/contact"
        class="text-white font-sans hover:text-gray-300 flex items-center gap-1"
    >
        {#if isActive("/contact")}
            <span class="text-white text-xs">•</span>
        {/if}
        CONTACT
    </a>
</nav>
