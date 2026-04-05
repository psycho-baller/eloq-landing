import InlineWaitlistForm from "@/components/InlineWaitlistForm";

const Hero = () => {
  return (
    <section id="waitlist" className="site-hero">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#17332d]" />
              <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Not another writing score
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-[3.8rem] font-display leading-[0.9] text-foreground sm:text-[4.5rem] md:text-[5.5rem]">
              Build a vocabulary that makes your writing clearer before the draft goes wrong.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-muted-foreground">
              Eloq is a Mac app for people who keep feeling the gap between what they mean and what they end up writing. Save what you overuse. Connect it to what you want to reach for instead. Let that graph travel with you.
            </p>

            <div className="mt-10">
              <InlineWaitlistForm />
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              macOS early access first
            </p>
          </div>

          <div className="relative">
            <div className="hero-surface">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Eloq Workspace
                  </p>
                  <p className="mt-2 font-display text-3xl text-foreground">Accepted links</p>
                </div>
                <div className="rounded-full border border-border bg-[#f4f2f0] px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground/75">
                  exported locally
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[0.85fr_auto_0.85fr] md:items-center">
                <div className="rounded-[22px] border border-border bg-[#fff4ef] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#8c4b32]">
                    overused
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-[#f1d6cb] bg-white px-4 py-3 text-lg text-foreground">thing</div>
                    <div className="rounded-2xl border border-[#f1d6cb] bg-white px-4 py-3 text-lg text-foreground">interesting</div>
                    <div className="rounded-2xl border border-[#f1d6cb] bg-white px-4 py-3 text-lg text-foreground">good</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="rounded-full border border-[#d2cecb] bg-[#e4f222] px-3 py-2 text-sm font-semibold text-foreground">
                    connect
                  </div>
                </div>

                <div className="rounded-[22px] border border-[#cad7be] bg-[#f5f9ea] p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#17332d]">
                    underused
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-[#d8e2cf] bg-white px-4 py-3 text-lg text-foreground">constraint</div>
                    <div className="rounded-2xl border border-[#d8e2cf] bg-white px-4 py-3 text-lg text-foreground">precise</div>
                    <div className="rounded-2xl border border-[#d8e2cf] bg-white px-4 py-3 text-lg text-foreground">compelling</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[18px] border border-border bg-[#f4f2f0] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">manual first</p>
                  <p className="mt-3 text-base leading-7 text-foreground/88">
                    Add your own relationships directly. AI can suggest links, but it does not own the workflow.
                  </p>
                </div>
                <div className="rounded-[18px] border border-border bg-[#f4f2f0] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">read everywhere else</p>
                  <p className="mt-3 text-base leading-7 text-foreground/88">
                    The browser extension and Obsidian plugin read the graph after it has been curated here.
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
