import { useEffect } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Terms() {
  useEffect(() => {
    document.title = "Eloq Terms";
  }, []);

  return (
    <div className="site-shell">
      <Header />
      <main className="px-6 pb-20 pt-32">
        <div className="site-container max-w-4xl">
          <div className="eloq-panel prose prose-invert max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-[hsl(var(--primary))]">
            <h1>Terms</h1>
            <p>
              Eloq is currently a pre-release product. These terms apply to your use of this website and to your submission of an email address to the Eloq waitlist.
            </p>

            <h2>Waitlist access</h2>
            <p>
              Joining the waitlist does not guarantee immediate access to Eloq. It only means we may contact you if macOS early access becomes available.
            </p>

            <h2>Pre-release status</h2>
            <p>
              Eloq is still evolving. Product details, feature scope, availability, and release timing may change before launch.
            </p>

            <h2>Acceptable use</h2>
            <p>
              Use this site lawfully and do not attempt to disrupt the waitlist form, serverless endpoint, or associated infrastructure.
            </p>

            <h2>Product positioning</h2>
            <p>
              Eloq is described here as a local-first macOS vocabulary tool and associated writing-awareness ecosystem. This site does not promise every future feature, integration, or rollout schedule beyond what is explicitly stated.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact <a href="mailto:hello@orbitlabs.studio">hello@orbitlabs.studio</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
