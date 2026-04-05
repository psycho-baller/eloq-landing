import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-[rgba(255,255,255,0.03)] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
              <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Not another writing score
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-display leading-[0.92] text-foreground sm:text-6xl md:text-7xl xl:text-[5.75rem]">
              You do not need more writing suggestions. You need better words to reach for.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
              Most tools show you the problem after the sentence is already on the page. Eloq helps you build the vocabulary that changes the sentence before it gets there. Save what you overuse. Reinforce what you want to reach for instead.
            </p>

            <div className="mt-10">
              <InlineWaitlistForm />
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              macOS early access first
            </p>
          </div>

          <div className="relative">
            <div className="eloq-panel">
              <div className="flex items-center justify-between border-b border-border/70 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Eloq Workspace
                  </p>
                  <p className="mt-2 font-display text-3xl text-foreground">Accepted links</p>
                </div>
                <div className="rounded-full border border-[hsl(var(--primary))/0.45] bg-[hsl(var(--primary))/0.12] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  exported locally
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[0.85fr_auto_0.85fr] md:items-center">
                <div className="rounded-[24px] border border-border/70 bg-[rgba(180,110,105,0.09)] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[rgb(180,110,105)]">
                    overused
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">thing</div>
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">interesting</div>
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">good</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-full border border-[hsl(var(--primary))/0.35] bg-[hsl(var(--primary))/0.1] px-3 py-2 text-sm text-[hsl(var(--primary))]">
                    connect
                  </div>
                </div>

                <div className="rounded-[24px] border border-border/70 bg-[hsl(var(--primary))/0.08] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                    underused
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">constraint</div>
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">precise</div>
                    <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">compelling</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-border/70 bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">AI as annotation</p>
                  <p className="mt-3 text-base leading-7 text-foreground/88">
                    Suggests links and rationale when useful, without turning the product into a chat surface.
                  </p>
                </div>
                <div className="rounded-[22px] border border-border/70 bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">read everywhere else</p>
                  <p className="mt-3 text-base leading-7 text-foreground/88">
                    The browser extension and Obsidian plugin consume the accepted graph after it has been curated here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
