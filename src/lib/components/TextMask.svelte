<script lang="ts">
    import { animate, inView, stagger } from "motion";
    import SplitType from "split-type";

    let { children, styles = "" } = $props();

    function animateMe(el: HTMLElement) {
        el.style.width = "100%";
        el.style.whiteSpace = "normal";

        const split = new SplitType(el, { types: "lines", tagName: "span" });

        split.lines?.forEach((line) => {
            line.style.display = "inline-block";
        });

        if (split.lines && split.lines.length > 0) {
            inView(el, () => {
                animate(
                    split.lines ?? [],
                    {
                        y: [50, 0],
                        opacity: [0, 1],
                    },
                    {
                        duration: 1,
                        ease: "easeInOut",
                        delay: stagger(0.15),
                    },
                );
            });
        } else {
            console.warn("SplitType failed to detect lines:", el.textContent);
        }

        // Return cleanup function to revert SplitType changes
        return {
            destroy() {
                split.revert();
            },
        };
    }
</script>

<div class="overflow-hidden">
    <p use:animateMe class={styles}>
        {@render children()}
    </p>
</div>
