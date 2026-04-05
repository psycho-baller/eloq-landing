import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-6">
      <div className="site-container">
        <div className="flex items-center justify-between rounded-full border border-border/80 bg-[rgba(12,14,17,0.78)] px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl md:px-6">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--primary))/0.45] bg-[hsl(var(--primary))/0.12] font-mono text-sm text-[hsl(var(--primary))]">
              E
            </div>
            <div>
              <p className="font-display text-2xl leading-none text-foreground">Eloq</p>
              <p className="text-[10px] uppercase tracking-[0.26em] text-muted-foreground">
                macOS early access
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#pain" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Problem
            </a>
            <a href="#benefits" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Benefits
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#consumers" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Consumers
            </a>
          </nav>

          <Button asChild className="rounded-full px-5 text-sm">
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
