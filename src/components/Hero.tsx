import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="orbit-hero-glow" aria-hidden />

      <div className="site-container">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <h1 className="mx-auto text-[3.4rem] font-display leading-[0.84] text-foreground sm:text-[4.55rem] md:text-[6.05rem]">
            Make better words feel <span className="text-primary">effortless</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[42rem] text-[1.1rem] leading-8 text-muted-foreground md:text-[1.34rem] md:leading-9">
            Eloq uses AI to move words from passive knowledge into active habit, so a richer
            vocabulary becomes something you naturally reach for.
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
