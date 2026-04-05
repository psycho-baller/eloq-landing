import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="site-container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl leading-none text-foreground">Eloq</p>

        <nav className="flex items-center gap-6">
          <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </Link>
          <a href="mailto:hello@orbitlabs.studio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
