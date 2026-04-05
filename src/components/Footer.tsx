import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--primary))/0.45] bg-[hsl(var(--primary))/0.12] font-mono text-sm text-[hsl(var(--primary))]">
              E
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-foreground">Eloq</p>
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                vocabulary graph for clearer writing
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <a href="mailto:hello@orbitlabs.studio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2026 Eloq by <a href="https://orbitlabs.studio" className="text-[hsl(var(--primary))] hover:underline transition-colors" target="_blank" rel="noreferrer">Orbit Labs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
