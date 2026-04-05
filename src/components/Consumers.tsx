const consumers = [
  {
    title: "Obsidian plugin",
    body: "Reads the Eloq snapshot from disk and quietly flags overused terms while you revise long-form notes.",
    tone: "document-native",
  },
  {
    title: "Browser extension",
    body: "Brings accepted Eloq links into live text fields and contenteditable surfaces across the web.",
    tone: "ambient",
  },
];

export default function Consumers() {
  return (
    <section id="consumers" className="site-section">
      <div className="site-container">
        <div className="eloq-panel grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Downstream Consumers</p>
            <h2 className="section-title max-w-xl">The Mac app is the source of truth. Everything else reads from it.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Eloq itself is where the vocabulary graph is built. The browser extension and Obsidian plugin are read-only surfaces that carry your accepted links into the places where writing actually happens, without turning those surfaces into separate products to maintain.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {consumers.map((consumer) => (
              <article key={consumer.title} className="rounded-[28px] border border-border/80 bg-[rgba(255,255,255,0.025)] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {consumer.tone}
                </p>
                <h3 className="mt-4 text-2xl font-display text-foreground">{consumer.title}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{consumer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
