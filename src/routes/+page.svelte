<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Header from "$lib/components/Header.svelte";
    import ImageMask from "$lib/components/ImageMask.svelte";
    import TextMask from "$lib/components/TextMask.svelte";
    import { animate, inView, stagger } from "motion";
    import SplitType from "split-type";
    import "../css/app.css";
    import { onMount } from "svelte";

    function animateHeading(el: HTMLElement) {
        // Initialize SplitType to split text into characters
        const split = new SplitType(el, {
            types: "words,chars",
            tagName: "span",
        });

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
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: stagger(0.028),
                    },
                );
            });
        }
    }

    let cards: { image: string; title: string; description: string }[] = [];

    onMount(async () => {
        const res = await fetch(
            "https://faithful-success-76debcfa37.strapiapp.com/api/menus?populate=*",
        );
        const json = await res.json();

        cards = (json.data || []).map((item: any) => {
            const imageUrl = item.Image?.url? item.Image.url : "/images/fallback.png";

            return {
                image: imageUrl,
                title: item.Title ?? "Untitled",
                description: item.Description ?? "",
            };
        });
    });

    const reviews = [
        {
            text: "One of the best restaurant experiences I've ever had.",
            name: "Ashley",
            stars: 5,
        },
        {
            text: "Amazing food and service, definitely recommend!",
            name: "John",
            stars: 4,
        },
        {
            text: "Cozy vibe and friendly staff.",
            name: "Sophie",
            stars: 4,
        },
        {
            text: "Cozy vibe and friendly staff.",
            name: "Alison",
            stars: 3,
        },
    ];
</script>

<Header />
<div class="flex flex-col gap-8 p-[2~8]">
    <div class="overflow-hidden">
        <h1
            class="block md:hidden text-[4rem~13rem] clash leading-[1] break-normal"
            {@attach animateHeading}
        >
            Pho & BBQ HOUSE
        </h1>
        <h1
            class="hidden md:block text-[4rem~12rem] clash leading-[1] break-normal"
            {@attach animateHeading}
        >
            Pho & BBQ HOUSE
        </h1>
    </div>
    <p class="uppercase text-[2xl~4xl] font-sans text-neutral-500 clash">
        food done right
    </p>
    <hr class="text-neutral-200" />
    <!-- Image Section -->
    <div
        class="w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden"
    >
        <ImageMask
            link="/images/landing_banner.webp"
            styles="w-full h-full object-cover"
            alt="Banner Image"
        />
    </div>
    <!-- Random Seperator Section -->
    <section class="flex flex-col gap-4">
        <div class="flex w-full justify-between flex-col md:flex-row gap-8">
            <div class="max-w-2xl space-y-4">
                <p class="uppercase text-[2xl~6xl] clash">our story</p>
                <TextMask styles="text-neutral-500 tracking-wide archivo">
                    Welcome to Pho & BBQ House! We’re passionate about serving
                    delicious, authentic flavors that make every meal memorable.
                    From our kitchen to your table, we focus on quality
                    ingredients, care in every dish, and creating a cozy
                    atmosphere for friends and family. Whether it’s your first
                    visit or your hundredth, we’re here to make every bite
                    special.
                </TextMask>
            </div>
            <div class="w-full flex justify-center md:justify-end items-center">
                <img
                    src="/images/let_him_cook.png"
                    alt="Illustration of a cooking pan"
                    class="h-[100px~250px]"
                />
            </div>
        </div>
    </section>

    <hr class="text-neutral-200" />
    <TextMask
        styles="text-[3rem~5rem] clash leading-none text-right border-r pr-4 border-neutral-200"
    >
        Pho & BBQ
    </TextMask>

    <!-- Featured Items Section -->
    <div class="w-full">
        <div class="grid gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
            {#each cards as card}
                <Card
                    image={card.image}
                    title={card.title}
                    description={card.description}
                />
            {/each}
        </div>
    </div>
    <a
        href="https://www.doordash.com/store/pho-&-barbeque-house-etna-35400589/75893546/"
        class="w-fit bg-neutral-900 text-white p-4 text-right clash text-2xl hover:bg-neutral-900/80 transition-all ml-auto"
        target="_blank"
        rel="noopener noreferrer"
    >
        Explore The Kitchen &nearr;</a
    >

    <hr class="text-neutral-200" />
    <!-- Bento Grids -->

    <div
        class="grid gap-4 h-screen sm:grid-rows-[60%_40%] grid-rows-[60%_auto] pb-4"
    >
        <!-- First row full width -->
        <div class="overflow-hidden">
            <img
                src="/images/landing_banner.webp"
                alt="Lounge Area"
                class="w-full h-full object-cover"
            />
        </div>

        <!-- Second row -->
        <div
            class="flex flex-col gap-4 sm:grid sm:grid-cols-[calc(25%_-_0.5rem)_calc(25%_-_0.5rem)_calc(50%_-_0.5rem)]"
        >
            <div class="overflow-hidden shadow-md min-h-[150px]">
                <img
                    src="/images/landing_banner.webp"
                    alt="Lounge Area"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="overflow-hidden shadow-md min-h-[150px]">
                <img
                    src="/images/landing_banner.webp"
                    alt="Lounge Area"
                    class="w-full h-full object-cover"
                />
            </div>
            <div class="overflow-hidden shadow-md min-h-[150px]">
                <img
                    src="/images/landing_banner.webp"
                    alt="Lounge Area"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
    <hr class="text-neutral-200" />

    <!-- Reviews  -->
    <section class="flex flex-col sm:flex-row">
        {#each reviews as review, i}
            <div
                class="flex flex-col justify-between items-center w-full sm:w-[400px] h-[500px] p-6 text-center
            {i !== reviews.length - 1
                    ? 'border-b sm:border-b-0 sm:border-r border-neutral-400'
                    : ''}"
            >
                <p>_</p>
                <p class="text-lg archivo text-neutral-600">
                    "{review.text}"
                </p>

                <div class="space-y-2">
                    <!-- Stars -->
                    <div
                        class="flex justify-center space-x-1 text-black text-2xl"
                    >
                        {#each Array(review.stars)}
                            <span>★</span>
                        {/each}
                    </div>
                    <p class="font-semibold">{review.name}</p>
                </div>
            </div>
        {/each}
    </section>
</div>
