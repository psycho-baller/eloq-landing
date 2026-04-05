import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const CTA = () => {
  return (
    <section className="site-section">
      <div className="site-container">
        <div className="eloq-panel text-center">
          <p className="section-kicker justify-center">Final CTA</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-display leading-tight text-foreground md:text-5xl">
            Build the vocabulary once. Let it keep paying off.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Join the waitlist for Eloq on macOS. When early access opens, you will be first in line for the version that grows with your writing instead of just commenting on it.
          </p>

          <div className="mt-10 flex justify-center">
            <InlineWaitlistForm align="center" caption="Eloq is launching on macOS first." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
