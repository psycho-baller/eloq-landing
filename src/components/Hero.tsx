import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="orbit-hero-glow" aria-hidden />

      <div className="site-container">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="text-[3.7rem] font-display leading-[0.9] text-foreground sm:text-[4.75rem] md:text-[6.4rem]">
            Know the words that keep <span className="orbit-gradient">flattening what you mean.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-muted-foreground md:text-[1.45rem]">
            Eloq helps you catch the weak defaults in your writing and replace them with words you
            actually want to reach for.
          </p>

          <div className="mt-10 flex justify-center">
            <InlineWaitlistForm align="center" className="max-w-[35rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
