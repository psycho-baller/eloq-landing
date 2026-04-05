import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="orbit-hero-glow" aria-hidden />
      <div
        className="orbit-ring left-1/2 top-28 h-[24rem] w-[24rem] -translate-x-1/2 md:h-[34rem] md:w-[34rem]"
        aria-hidden
      />
      <div
        className="orbit-ring orbit-ring-strong left-1/2 top-36 h-[18rem] w-[18rem] -translate-x-1/2 md:h-[26rem] md:w-[26rem]"
        aria-hidden
      />

      <div className="site-container">
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="hero-chip">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Orbit Labs • macOS early access</span>
          </div>

          <h1 className="mt-8 text-[3.7rem] font-display leading-[0.9] text-foreground sm:text-[4.75rem] md:text-[6.4rem]">
            Know the words that keep <span className="orbit-gradient">flattening what you mean.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-muted-foreground md:text-[1.55rem]">
            Eloq is a private vocabulary graph for your writing. Save what you overuse, connect it to
            stronger alternatives, and let that knowledge follow you wherever you write.
          </p>

          <div className="mt-10 flex justify-center">
            <InlineWaitlistForm
              align="center"
              className="max-w-[35rem]"
              caption="Join the waitlist for macOS early access."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
