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
            duration: 0.3,
            ease: "easeInOut",
            delay: stagger(0.028),
          }
        );
      });
    }
  }

  const cards = [
    {
      image: "/images/Chicken_Wings.webp",
      title: "Saucy Chicken Wings",
      description:
        "Crispy on the outside, juicy on the inside, tossed in a sauce that’ll make you wonder why you ever settled for plain fried chicken.",
      href: "/",
    },
    {
      image: "/images/Chilli_Momo.webp",
      title: "Chilli Momos",
      description:
        "Soft, steamy momos drenched in a fiery chili sauce that somehow manages to be both painful and addictive at the same time.",
      href: "/",
    },
    {
      image: "/images/Fried_Rice.webp",
      title: "Comfort Fried Rice",
      description:
        "Fluffy rice wok-tossed with veggies, eggs, and just the right amount of seasoning to make it taste like a hug in a bowl.",
      href: "/",
    },
    {
      image: "/images/Pork_Sekuwa.webp",
      title: "Smoky Pork Sekuwa",
      description:
        "Smoky, tender pork skewers grilled over open flames, with flavors so bold you’ll feel like you’re at a street-side barbecue party.",
      href: "/",
    },
    {
      image: "/images/Alu_Chop.webp",
      title: "Crispy Alu Chop",
      description:
        "Golden-fried potato fritters, crunchy on the outside and fluffy inside, perfect for snacking while pretending you’ll save some for later.",
      href: "/",
    },
  ];
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
      name: "Sophie",
      stars: 3,
    },
  ];
</script>

<Header />
<div class="flex flex-col gap-8 p-[2~8]">
  <div class="overflow-hidden">
    <h1
      class="block md:hidden text-[4rem~13rem] clash leading-[1]"
      {@attach animateHeading}
    >
      Pho &
      <br />
      Barbeque
    </h1>
    <h1
      class="hidden md:block text-[4rem~12rem] clash leading-[1]"
      {@attach animateHeading}
    >
      Pho & Barbeque
    </h1>
  </div>
  <p class="uppercase text-[2xl~4xl] font-sans text-neutral-500">
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
        <p class="uppercase text-[2xl~6xl]">our story</p>
        <TextMask styles="text-neutral-500 tracking-wide">
          We are Jordi and Carla. Well, it's Carla speaking to you, and the
          other one is my father, the person responsible for us being in Montgai
          (Lleida) today, dedicating ourselves to olive tree cultivation. Two
          years ago, neither of us expected that a bunch of olive trees he
          planted to keep himself entertained during retirement would bring me
          back home. And even less did we expect that they would end
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
    <div class="">
      <p class="tracking-wide">
        We are Jordi and Carla. Well, it's Carla speaking to you, and the other
        one is my father, the person responsible for us being in Montgai
        (Lleida) today, dedicating ourselves to olive tree cultivation. Two
        years ago, neither of us expected that a bunch of olive trees he planted
        to keep himself entertained during retirement would bring me back home.
        And even less did we expect that they would end. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Suscipit cum harum soluta
        necessitatibus minus cumque. Dolorem dolorum, ab cupiditate tenetur
        error libero explicabo laboriosam porro totam id illo perferendis neque?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, animi,
        molestiae porro alias odit dolores quidem aliquid corporis quae
        accusantium deserunt consequatur quos dolor pariatur. Consectetur
        exercitationem excepturi laborum nostrum.
      </p>
    </div>
  </section>

  <hr class="text-neutral-200" />
  <TextMask
    styles="h1 clash leading-none text-right border-r pr-4 border-neutral-200"
  >
    Nepali Kitchen
  </TextMask>

  <!-- Featured Items Section -->
  <div class="w-full">
    <div class="grid gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-4">
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
    class="w-fit bg-neutral-900 text-white p-4 text-right clash text-2xl hover:bg-neutral-900/80 transition-all ml-auto"
  >
    Explore The Kitchen &nearr;</a
  >

  <hr class="text-neutral-200" />
  <!-- Bento Grids -->

  <div class="grid gap-4 h-screen grid-rows-[60%_40%] pb-4">
    <!-- First row full width -->
    <div class="overflow-hidden">
      <img
        src="/images/landing_banner.webp"
        alt="Lounge Area"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Second row: 2 columns (40/60) -->
    <div
      class="grid gap-4 grid-cols-[calc(25%_-_0.5rem)_calc(25%_-_0.5rem)_calc(50%_-_0.5rem)]"
    >
      <div class="overflow-hidden">
        <img
          src="/images/landing_banner.webp"
          alt="Lounge Area"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="/images/landing_banner.webp"
          alt="Lounge Area"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="overflow-hidden">
        <img
          src="/images/landing_banner.webp"
          alt="Lounge Area"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  <!-- Reviews  -->

  <section class="flex justify-between">
    {#each reviews as review, i}
      <div
        class="flex flex-col justify-between items-center w-[400px] h-[500px] p-6 text-center {i !==
        reviews.length - 1
          ? 'border-r border-neutral-400'
          : ''}"
      >
        <p>_</p>
        <p class="text-lg archivo text-neutral-600">
          "{review.text}"
        </p>

        <div class="space-y-2">
          <!-- Stars -->
          <div class="flex justify-center space-x-1 text-black text-2xl">
            {#each Array(review.stars) as _, j}
              <span>★</span>
            {/each}
          </div>
          <p class="font-semibold">{review.name}</p>
        </div>
      </div>
    {/each}
  </section>
</div>
