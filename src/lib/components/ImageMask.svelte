<script lang="ts">
    import { animate, inView } from "motion";
    let { link, styles, alt } = $props();
    function animateImage(el: HTMLElement) {
        inView(el, () => {
            animate(
                el,
                {
                    opacity: 1,
                    clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
                },
                { duration: 0.69, ease: "easeInOut" },
            );
        });
    }
</script>

<img src={link} {alt} class={styles} {@attach animateImage} />
