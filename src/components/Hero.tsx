import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="orbit-hero-glow" aria-hidden />

      <div className="site-container">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="mx-auto max-w-[10.5ch] text-[3.85rem] font-display leading-[0.86] text-foreground sm:text-[4.9rem] md:text-[6.55rem]">
            Know the words that keep <span className="text-primary">flattening what you mean.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[34rem] text-[1.1rem] leading-8 text-muted-foreground md:text-[1.34rem] md:leading-9">
            Eloq helps you catch the weak defaults in your writing and replace them with words you
            actually want to reach for.
          </p>

          <div className="mt-12 flex justify-center">
            <InlineWaitlistForm align="center" className="max-w-[35rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
