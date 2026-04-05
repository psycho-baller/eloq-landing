import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="site-container">
        <div className="site-header-bar">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
              E
            </div>
            <div>
              <p className="font-display text-[1.9rem] leading-none text-foreground">Eloq</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                macOS early access
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#pain" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Problem
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              How it works
            </a>
          </nav>

          <Button asChild className="rounded-full border-0 bg-primary px-5 text-sm text-primary-foreground shadow-none hover:opacity-90">
            <a href="#waitlist">Join</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
