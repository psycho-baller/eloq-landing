export default function Pain() {
  return (
    <section id="pain" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">The Gap</p>
          <h2 className="section-title">You already know more words than you can reach for</h2>
          <p className="section-copy">
            Most people have a bigger passive vocabulary than active one. Eloq helps close that
            gap.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <article className="problem-card">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Words You Know
            </p>
            <p className="mt-4 font-display text-[2.15rem] leading-[1.02] text-foreground md:text-[2.45rem]">
              nuanced, precise, deliberate, vivid
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--target">nuanced</span>
              <span className="compare-chip compare-chip--target">precise</span>
              <span className="compare-chip compare-chip--target">deliberate</span>
            </div>
          </article>

          <div className="flex justify-center">
            <div className="problem-bridge">shrinks into</div>
          </div>

          <article className="problem-card">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Words You Default To
            </p>
            <p className="mt-4 font-display text-[2.15rem] leading-[1.02] text-foreground md:text-[2.45rem]">
              good, thing, interesting, hard
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--avoid">thing</span>
              <span className="compare-chip compare-chip--avoid">interesting</span>
              <span className="compare-chip compare-chip--avoid">good</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
