import { useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  useEffect(() => {
    document.title = "Eloq Privacy";
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main className="px-6 pb-20 pt-32">
        <div className="site-container max-w-4xl">
          <div className="eloq-panel prose max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-foreground">
            <h1>Privacy</h1>
            <p>
              Eloq is built around a local-first product model. The landing page and waitlist are the only parts of this project that collect public-facing web data.
            </p>

            <h2>What the website stores</h2>
            <p>
              If you join the Eloq waitlist, we store your email address in Notion so we can notify you when macOS early access opens. We also store the submission date, app label, and platform label associated with that signup.
            </p>

            <h2>What the website does not store</h2>
            <ul>
              <li>Your Eloq vocabulary graph</li>
              <li>Your local snapshots</li>
              <li>Your writing data</li>
              <li>Your accepted links or annotations</li>
            </ul>

            <h2>How the product is intended to work</h2>
            <p>
              Eloq itself is designed as a local-first macOS app. The vocabulary graph, exported snapshot, and downstream writing-awareness surfaces are intended to remain under your control rather than living in a hosted web dashboard.
            </p>

            <h2>Contact</h2>
            <p>
              For privacy questions, contact <a href="mailto:hello@orbitlabs.studio">hello@orbitlabs.studio</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
