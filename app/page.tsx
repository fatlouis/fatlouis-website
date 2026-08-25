"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: direction === "right" ? 680 : -680,
      behavior: "smooth",
    });
  };

  const languages = ["EN", "IT", "FR", "ES", "SK", "DE"];

  const momentPhotos = [
    "moment-1.jpg",
    "moment-2.jpg",
    "moment-3.jpg",
    "moment-4.jpg",
    "moment-5.jpg",
    "moment-6.jpg",
    "moment-7.jpg",
    "moment-8.jpg",
    "moment-9.jpg",
    "moment-11.jpg",
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative h-[680px] overflow-hidden bg-black md:h-[82vh] md:min-h-[760px]">

        {/* FULL WIDTH HERO PHOTO */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <Image
            src="/hero-burgers.jpg"
            alt="Fat Louis burgers"
            fill
            priority
            className="object-cover object-[58%_center] md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/35 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* CENTERED CONTENT CANVAS */}
        <div className="relative z-20 mx-auto h-full w-full max-w-[1600px]">

          {/* TOP LEFT — LOGO */}
          <div className="absolute left-8 top-8 z-50 lg:left-14 lg:top-10">
            <Image
              src="/logo.png"
              alt="Fat Louis"
              width={110}
              height={110}
              priority
              className="h-[82px] w-[82px] object-contain lg:h-[96px] lg:w-[96px]"
            />
          </div>

          {/* TOP RIGHT — INSTAGRAM + LANGUAGE */}
          <div className="absolute right-8 top-8 z-50 flex items-start gap-8 lg:right-14 lg:top-10">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/fatlouis_sr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fat Louis Instagram"
              className="mt-[2px] text-[#f6e1be] transition duration-200 hover:text-[#F04A24]"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LANGUAGE MENU */}
            <div className="relative min-w-[58px] text-right">

              <button
                type="button"
                onClick={() => setLanguageOpen((prev) => !prev)}
                className="flex w-full items-center justify-end gap-2 text-[15px] font-black uppercase tracking-[0.08em] text-[#f6e1be] transition hover:text-white"
                aria-expanded={languageOpen}
                aria-label="Select language"
              >
                {language}

                <span
                  className={`text-[11px] text-[#F04A24] transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {languageOpen && (
                <div className="absolute right-0 top-8 flex flex-col items-end gap-3">
                  {languages
                    .filter((item) => item !== language)
                    .map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setLanguage(item);
                          setLanguageOpen(false);
                        }}
                        className="text-[15px] font-black uppercase tracking-[0.08em] text-[#f6e1be] transition hover:text-[#F04A24]"
                      >
                        {item}
                      </button>
                    ))}
                </div>
              )}

            </div>
          </div>

          {/* MAIN GRAPHIC BLOCK */}
          <div className="absolute bottom-8 left-8 z-30 lg:bottom-10 lg:left-14">
            <div className="w-[520px] max-w-[43vw]">

              {/* FAT LOUIS BURGER */}
              <div className="w-full">
                <Image
                  src="/fat-louis-burger.svg"
                  alt="Fat Louis Burger"
                  width={1000}
                  height={450}
                  priority
                  className="h-auto w-full"
                />
              </div>

              {/* RESTAURANT | BISTRO */}
              <div className="mt-3 pl-3">
                <p className="text-[14px] font-black uppercase tracking-[0.28em] text-[#f6e1be] xl:text-[16px]">
                  RESTAURANT
                  <span className="mx-5 text-[#F04A24]">|</span>
                  BISTRO
                </p>
              </div>

              {/* GOOD FOOD BAD MANNERS */}
              <div className="mt-4 m1 w-[110%] rotate-[-2deg]">
                <Image
                  src="/good-food-bad-manners.svg"
                  alt="Good Food Bad Manners"
                  width={900}
                  height={360}
                  priority
                  className="h-auto w-full"
                />
              </div>

              {/* CTA */}
              <div className="mt-10 ml-2">
                
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          ABOUT FAT LOUIS
      ===================================================== */}
      <section
  id="about"
  className="relative overflow-hidden bg-black text-[#f6e1be]"
>

  {/* CRUMPLED PAPER TEXTURE */}
  <div
    className="pointer-events-none absolute inset-0 z-0 opacity-90"
    style={{
      backgroundImage: "url('/paper-dark.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "brightness(1.65) contrast(1.35)",
    }}
  />

  {/* DARKENING OVERLAY */}
  <div className="pointer-events-none absolute inset-0 z-[1] bg-black/10" />

  {/* SUBTLE BACKGROUND GLOW */}
  <div
    className="pointer-events-none absolute inset-0 z-[2] opacity-20"
    style={{
      background:
        "radial-gradient(circle at 50% 30%, rgba(70,55,40,0.32), transparent 48%)",
    }}
  />

  <div className="relative z-10 mx-auto max-w-[1600px] px-8 py-12 lg:px-14 lg:py-14">

          {/* BACKGROUND LOUIS */}
          <div className="pointer-events-none absolute -right-10 top-0 select-none text-[190px] font-black uppercase leading-none tracking-[-0.08em] text-[#f6e1be]/[0.025] lg:text-[300px]">
            LOUIS
          </div>

          <div className="relative z-10">

           {/* ABOUT HEADER — CENTERED */}
<div className="relative mx-auto flex max-w-[1050px] flex-col items-center text-center">

  <p className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-[#F04A24]">
    GOOD FOOD. BAD MANNERS.
  </p>

  <h2 className="text-[46px] font-black uppercase leading-[0.90] tracking-[-0.04em] text-[#f6e1be] md:text-[56px] lg:text-[64px]">
    THIS IS
    <br />
    FAT LOUIS.
  </h2>

  {/* WHO THE HELL IS LOUIS */}
<div className="absolute left-[72%] top-[25%] hidden w-[250px] rotate-[10deg] lg:block xl:w-[280px]">
  <Image
    src="/who-the-hell-is-louis.svg"
    alt="Who the hell is Louis?"
    width={700}
    height={300}
    className="h-auto w-full"
  />
</div>

</div>

            {/* BODY TEXT */}
<div className="mx-auto mt-8 max-w-[1050px] text-center text-[16px] leading-[1.5] text-[#f6e1be]/85">

  {/* MAIN TEXT BLOCK */}
  <p>
    Born in Bratislava, Fat Louis was built for people who like their food big,
    their flavours loud and their tables full. We&apos;re serious about burgers,
    fire, proper ingredients and food that&apos;s actually worth getting your
    hands dirty for. But Louis was never just about burgers. It&apos;s about the
    whole thing — friends around the table, something cold in your glass, plates
    being passed around and absolutely no reason to behave too politely. From
    stacked burgers and straight-off-the-grill favourites to street food inspired
    by places we love, everything on our menu is made to be eaten, shared, stolen
    from someone else&apos;s plate and talked about afterwards.
  </p>

  {/* LAST PARAGRAPH */}
  <p className="mt-5">
    Two spots. Two different moods. One Louis. Pick the place that suits you and
    come hungry. Whatever side of Louis you choose, expect big portions, strong
    flavours and absolutely no boring plates.
  </p>

  {/* CLAIM */}
  <p className="mt-6 text-[20px] font-black leading-tight text-[#F04A24] md:text-[22px]">
    Good food was never supposed to be polite.
  </p>

</div>

            {/* CTA */}
            <div className="mt-7 flex justify-center">
              <a
                href="#locations"
                className="group inline-flex items-center gap-10 border-2 border-[#f6e1be] px-7 py-4 text-[14px] font-black uppercase tracking-[0.12em] text-[#f6e1be] transition duration-200 hover:border-[#F04A24] hover:bg-[#F04A24] hover:text-white"
              >
                FIND YOUR LOUIS

                <span className="text-xl transition group-hover:translate-y-1">
                  ↓
                </span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          LOCATIONS
      ===================================================== */}
      <section
        id="locations"
        className="bg-[#181818] px-8 pb-8 pt-12 text-white lg:px-14 lg:pb-10 lg:pt-14"
      >
        <div className="mx-auto max-w-[1600px]">

          {/* MAIN LOCATIONS LAYOUT */}
          <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-center">

            {/* TWO SPOTS */}
            <div className="flex items-center justify-center">
              <Image
                src="/two-spots-one-louis.svg"
                alt="Two spots. One Louis."
                width={500}
                height={500}
                className="h-auto w-[120px] lg:w-[180px]"
              />
            </div>

            {/* BOTH CARDS */}
            <div className="grid min-w-0 gap-8 xl:grid-cols-2">

              {/* =====================================================
    RESTAURANT CARD
===================================================== */}
<a
  href="#restaurant"
  className="group relative min-w-0 overflow-hidden bg-[#111111]"
>
  {/* DESKTOP / TABLET PAPER TEXTURE — WHOLE CARD */}
  <div
    className="pointer-events-none absolute inset-0 z-0 hidden opacity-90 sm:block"
    style={{
      backgroundImage: "url('/paper-dark.png')",
      backgroundSize: "145% auto",
      backgroundPosition: "30% center",
      backgroundRepeat: "no-repeat",
      filter: "brightness(1.65) contrast(1.35)",
    }}
  />

  {/* DESKTOP OVERLAY */}
  <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/10 sm:block" />

  {/* CARD CONTENT */}
  <div className="relative z-10 grid min-w-0 sm:grid-cols-[60%_40%]">

    {/* TEXT SIDE */}
    <div className="relative z-20 flex min-h-[300px] min-w-0 flex-col justify-center overflow-hidden px-7 py-9 lg:px-8 2xl:px-10">

      {/* MOBILE PAPER TEXTURE — TEXT SIDE ONLY */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90 sm:hidden"
        style={{
          backgroundImage: "url('/paper-dark.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.65) contrast(1.35)",
        }}
      />

      {/* MOBILE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/10 sm:hidden" />

      {/* BIG BACKGROUND NUMBER */}
      <div className="pointer-events-none absolute right-[-15px] top-[-38px] z-[2] select-none text-[190px] font-black leading-none tracking-[-0.08em] text-white/[0.025] 2xl:text-[210px]">
        01
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 min-w-0">

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.30em] text-[#F04A24]">
          FAT LOUIS
        </p>

        <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#f6e1be]/55">
          MICHALSKÁ 9
        </p>

        <h3 className="whitespace-nowrap text-[clamp(27px,2.2vw,38px)] font-black uppercase leading-none tracking-[-0.03em] text-[#f6e1be]">
          RESTAURANT
        </h3>

        <p className="mt-5 max-w-[330px] text-[14px] leading-[1.5] text-[#f6e1be]/70">
          Sit down. Stay longer. Burgers, drinks and everything
          that belongs around a full table.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f6e1be]">
            ENTER RESTAURANT
          </span>

          <span className="text-[20px] text-[#F04A24] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>
    </div>

    {/* PHOTO SIDE */}
    <div className="relative min-h-[260px] overflow-hidden sm:min-h-[300px]">
      <Image
        src="/restaurant-tag.png"
        alt="Fat Louis Restaurant Michalská 9"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* FADE PHOTO INTO CARD */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/15 to-transparent" />
    </div>

  </div>
</a>


{/* =====================================================
    BISTRO CARD
===================================================== */}
<a
  href="#bistro"
  className="group relative min-w-0 overflow-hidden bg-[#111111]"
>
  {/* DESKTOP / TABLET PAPER TEXTURE — WHOLE CARD */}
  <div
    className="pointer-events-none absolute inset-0 z-0 hidden opacity-90 sm:block"
    style={{
      backgroundImage: "url('/paper-dark.png')",
      backgroundSize: "145% auto",
      backgroundPosition: "155% center",
      backgroundRepeat: "no-repeat",
      filter: "brightness(1.65) contrast(1.35)",
    }}
  />

  {/* DESKTOP OVERLAY */}
  <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-black/10 sm:block" />

  {/* CARD CONTENT */}
  <div className="relative z-10 grid min-w-0 sm:grid-cols-[60%_40%]">

    {/* TEXT SIDE */}
    <div className="relative z-20 flex min-h-[300px] min-w-0 flex-col justify-center overflow-hidden px-7 py-9 lg:px-8 2xl:px-10">

      {/* MOBILE PAPER TEXTURE — TEXT SIDE ONLY */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90 sm:hidden"
        style={{
          backgroundImage: "url('/paper-dark.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.65) contrast(1.35)",
        }}
      />

      {/* MOBILE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/10 sm:hidden" />

      {/* BIG BACKGROUND NUMBER */}
      <div className="pointer-events-none absolute right-[-20px] top-[-38px] z-[2] select-none text-[190px] font-black leading-none tracking-[-0.08em] text-white/[0.025] 2xl:text-[210px]">
        02
      </div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 min-w-0">

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.30em] text-[#F04A24]">
          FAT LOUIS
        </p>

        <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#f6e1be]/55">
          VRAKUŇA
        </p>

        <h3 className="whitespace-nowrap text-[clamp(27px,2.2vw,38px)] font-black uppercase leading-none tracking-[-0.03em] text-[#f6e1be]">
          BISTRO
        </h3>

        <p className="mt-5 max-w-[330px] text-[14px] leading-[1.5] text-[#f6e1be]/70">
          Fast, loud and straight to the point. Street food,
          burgers and no unnecessary bullshit.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f6e1be]">
            ENTER BISTRO
          </span>

          <span className="text-[20px] text-[#F04A24] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>
    </div>

    {/* PHOTO SIDE */}
    <div className="relative min-h-[260px] overflow-hidden sm:min-h-[300px]">
      <Image
        src="/bistro-tag.png"
        alt="Fat Louis Bistro Vrakuňa"
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* FADE PHOTO INTO CARD */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/15 to-transparent" />
    </div>

  </div>
</a>

            </div>
          </div>
        </div>

        {/* =====================================================
            THE MOMENT
        ===================================================== */}
        <div className="-mx-8 mt-16 overflow-hidden bg-[#111] lg:-mx-14">

          <div className="relative py-14 lg:py-16">

            {/* BACKGROUND */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 48% 30%, rgba(255,255,255,0.055), transparent 42%), linear-gradient(135deg, #181818 0%, #0b0b0b 55%, #141414 100%)",
              }}
            />

            {/* GIANT BACKGROUND TEXT */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">

              <div className="absolute -left-10 -top-3 whitespace-nowrap text-[100px] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.045] lg:text-[135px]">
                THE MOMENT THE MOMENT THE MOMENT THE MOMENT
              </div>

              <div className="absolute -left-28 top-[105px] whitespace-nowrap text-[100px] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.045] lg:top-[130px] lg:text-[135px]">
                THE MOMENT THE MOMENT THE MOMENT THE MOMENT
              </div>

              <div className="absolute -left-4 bottom-[-15px] whitespace-nowrap text-[100px] font-black uppercase leading-none tracking-[-0.07em] text-white/[0.045] lg:text-[135px]">
                THE MOMENT THE MOMENT THE MOMENT THE MOMENT
              </div>

            </div>

            {/* CONTENT */}
            <div className="relative z-10 w-full">

              {/* TITLE */}
              <div className="relative z-40 mx-auto mb-5 flex max-w-[1600px] justify-end px-8 lg:px-14">
                <p className="-translate-y-6 rotate-[-2deg] text-[26px] font-black uppercase tracking-[-0.03em] text-[#F04A24] lg:text-[34px]">
                  THE MOMENT&apos;
                </p>
              </div>

              {/* =====================================================
                  FULL WIDTH MANUAL CAROUSEL
              ===================================================== */}
              <div className="relative w-full -mt-8">

                {/* LEFT ARROW */}
                <button
                  type="button"
                  onClick={() => scrollCarousel("left")}
                  aria-label="Previous photos"
                  className="absolute left-5 top-1/2 z-30 -translate-y-1/2 text-[90px] font-light leading-none text-white/80 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] transition duration-200 hover:scale-110 hover:text-white"
                >
                  ‹
                </button>

                {/* RIGHT ARROW */}
                <button
                  type="button"
                  onClick={() => scrollCarousel("right")}
                  aria-label="Next photos"
                  className="absolute right-5 top-1/2 z-30 -translate-y-1/2 text-[90px] font-light leading-none text-white/80 drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)] transition duration-200 hover:scale-110 hover:text-white"
                >
                  ›
                </button>

                {/* PHOTO TRACK */}
                <div
                  ref={carouselRef}
                  className="fat-louis-slider flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
                >
                  {momentPhotos.map((photo, index) => (
                    <div
                      key={photo}
                      className="relative h-[425px] w-[340px] flex-none snap-start overflow-hidden"
                    >
                      <Image
                        src={`/${photo}`}
                        alt={`Fat Louis moment ${index + 1}`}
                        fill
                        sizes="340px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>


      {/* =========================================================
          INSTAGRAM FOOTER STRIP
      ========================================================= */}
      <section className="relative -mt-[40px] h-[78px] overflow-hidden bg-black/65">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex h-full items-center justify-center">

          <a
            href="https://www.instagram.com/fatlouis_sr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fat Louis Instagram"
            className="group flex items-center gap-3 text-[#f6e1be] transition-colors duration-200 hover:text-[#F04A24]"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[18px] w-[18px]"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>

            <span className="text-[12px] font-black uppercase tracking-[0.12em]">
              FATLOUIS_SR
            </span>

          </a>

        </div>

      </section>


      {/* =====================================================
          GLOBAL PAGE STYLES
      ===================================================== */}
      <style jsx>{`
        .fat-louis-slider {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .fat-louis-slider::-webkit-scrollbar {
          display: none;
        }
      `}</style>

    </main>
  );
}