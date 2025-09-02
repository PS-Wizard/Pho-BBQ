<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import ImageMask from "$lib/components/ImageMask.svelte";
    import TextMask from "$lib/components/TextMask.svelte";
    import { animate, inView, stagger } from "motion";
    import SplitType from "split-type";

    function animateHeading(el: HTMLElement) {
        // Initialize SplitType to split text into characters
        const split = new SplitType(el, { types: "chars", tagName: "span" });

        // Check if split.chars is not null
        if (split.chars) {
            inView(el, () => {
                animate(
                    split.chars ?? [],
                    {
                        y: [200, 0],
                        opacity: [0, 1],
                    },
                    {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: stagger(0.05),
                    },
                );
            });
        }
    }

    const cards = [
        {
            image: "/images/landing_banner.webp",
            title: "Super Good Food",
            description: "This is the first card",
            href: "/card-one",
        },
        {
            image: "/images/landing_banner.webp",
            title: "Some Other Good Food",
            description: "This is the second card",
            href: "/card-two",
        },
        {
            image: "/images/landing_banner.webp",
            title: "I'd like a burrito right about now",
            description: "This is the third card",
            href: "/card-three",
        },
    ];
</script>

<Header />
<div class="flex flex-col gap-8 p-[2~8]">
    <!-- Image Section -->
    <div
        class="w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
    >
        <ImageMask
            link="/images/landing_banner.webp"
            styles="w-full h-full object-cover opacity-0"
            alt="Banner Image"
        />
    </div>

    <div class="overflow-hidden">
        <h1
            class="block md:hidden text-[4rem~13rem] clash leading-none"
            {@attach animateHeading}
        >
            Pho &
            <br />
            Barbeque
        </h1>
        <h1
            class="hidden md:block text-[4rem~13rem] clash leading-none"
            {@attach animateHeading}
        >
            Pho & Barbeque
        </h1>
    </div>
    <hr class="text-neutral-200" />

    <!-- Random Seperator Section -->
    <div class="flex w-full justify-between flex-col md:flex-row">
        <div class="max-w-2xl text-[xs~base]">
            <TextMask styles="uppercase">our story</TextMask>
            <TextMask styles="text-neutral-500 tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptate asperiores, repellendus nobis tenetur aspernatur
                officia eaque minus cupiditate. Ratione laboriosam
                exercitationem veritatis natus laudantium soluta minima ullam
                optio quam?
            </TextMask>
        </div>
        <div
            class="text-[xs~base] w-full flex justify-center md:justify-end items-center"
        >
            <img
                src="/images/let_him_cook.png"
                alt="Illustration of a cooking pan"
            />
        </div>
    </div>

    <hr class="text-neutral-200" />
    <TextMask
        styles="h1 clash leading-none text-right border-r pr-4 border-neutral-200"
    >
        Featured
    </TextMask>

    <!-- Featured Items Section -->
    <div class="w-full">
        <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {#each cards as card}
                <Card
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    href={card.href}
                />
            {/each}
        </div>
    </div>
    <a
        href="/"
        class="w-full bg-neutral-900 text-white p-4 text-right clash text-2xl hover:bg-neutral-900/80 transition-all"
    >
        Explore The Kitchen &nearr;</a
    >

    <!-- Bento Grids -->

    <div class="grid gap-4 h-screen grid-rows-[60%_40%] pb-4">
        <!-- First row full width -->
        <div class="overflow-hidden">
            <ImageMask
                link="/images/landing_banner.webp"
                alt="Lounge Area"
                styles="w-full h-full object-cover"
            />
        </div>

        <!-- Second row: 2 columns (40/60) -->
        <div
            class="grid gap-4 grid-cols-[calc(40%_-_0.5rem)_calc(60%_-_0.5rem)]"
        >
            <div class="overflow-hidden">
                <ImageMask
                    link="/images/landing_banner.webp"
                    alt="Lounge Area"
                    styles="w-full h-full object-cover"
                />
            </div>
            <div class="overflow-hidden">
                <ImageMask
                    link="/images/landing_banner.webp"
                    alt="Lounge Area"
                    styles="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
</div>
