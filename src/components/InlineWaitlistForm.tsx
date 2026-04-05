import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "loading" | "success" | "already-added" | "error";

interface InlineWaitlistFormProps {
  className?: string;
  platform?: string;
  align?: "left" | "center";
  caption?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function InlineWaitlistForm({
  className,
  platform = "macOS",
  align = "left",
  caption = "",
}: InlineWaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const isJoined = status === "success" || status === "already-added";
  const isLoading = status === "loading";

  const noteToneClass = useMemo(() => {
    if (status === "error") {
      return "text-[hsl(var(--destructive))]";
    }
    if (isJoined) {
      return "text-primary";
    }
    return "text-muted-foreground";
  }, [isJoined, status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Use a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      setMessage(null);

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          platform,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to join the waitlist.");
      }

      if (data.alreadyAdded) {
        setStatus("already-added");
        setMessage("We already have your email.");
        return;
      }

      setStatus("success");
      setMessage("You are on the waitlist.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "There was an issue processing the request. Please try again."
      );
    }
  }

  const note = message ?? caption;

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full max-w-xl", className)}
      aria-label="Eloq waitlist form"
    >
      <div className="flex items-center gap-3 rounded-full border border-border/50 bg-background/50 py-[6px] pl-5 pr-[8px] backdrop-blur-sm">
        <input
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setMessage(null);
            }
          }}
          className="h-10 min-w-0 flex-1 appearance-none border-0 bg-transparent px-0 text-base leading-none text-foreground outline-none placeholder:text-muted-foreground/60"
          disabled={isLoading || isJoined}
          aria-invalid={status === "error"}
        />
        <button
          type="submit"
          disabled={isLoading || isJoined}
          className="h-10 min-w-[6.1rem] shrink-0 rounded-full bg-primary px-5 text-base font-medium leading-none text-primary-foreground transition-colors duration-200 hover:bg-[#f5ff78] disabled:cursor-default disabled:opacity-100"
        >
          {isJoined ? "Joined" : isLoading ? "Joining..." : "Join"}
        </button>
      </div>

      {note ? (
        <div
          className={cn(
            "mt-3 text-sm",
            align === "center" ? "text-center" : "text-left",
            noteToneClass
          )}
        >
          {note}
        </div>
      ) : null}
    </form>
  );
}
