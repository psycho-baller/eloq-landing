import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Eloq";
    console.error("404 route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="site-shell flex min-h-screen items-center justify-center px-6">
      <div className="eloq-panel max-w-xl text-center">
        <p className="section-kicker justify-center">404</p>
        <h1 className="text-5xl font-display text-foreground">This page does not exist.</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Return to the Eloq landing page to join the macOS waitlist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-[10px] border border-border bg-[#e4f222] px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[#f5ff78]"
        >
          Back to Eloq
        </Link>
      </div>
    </div>
  );
}
