<script lang="ts">
    import favicon from "$lib/assets/favicon.svg";
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount } from "svelte";
    import "../css/app.css";
    import "lenis/dist/lenis.css";
    import Lenis from "lenis";
    import Footer from "$lib/components/Footer.svelte";
    let { children } = $props();
    onMount(() => {
        const lenis = new Lenis({
            duration: 1,
            smoothWheel: true,
            lerp: 0.05,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on component unmount
        return () => {
            lenis.destroy();
        };
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<main class="z-10 relative bg-white">
    {@render children?.()}
</main>
<div>
    <Footer />
</div>
