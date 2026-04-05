import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
      <div className="eloq-form-frame">
        <div className="eloq-pill-field">
          <Input
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
            className="eloq-pill-input"
            disabled={isLoading || isJoined}
            aria-invalid={status === "error"}
          />
          <Button
            type="submit"
            disabled={isLoading || isJoined}
            className="eloq-pill-submit"
          >
            {isJoined ? "Joined" : isLoading ? "Joining..." : "Join"}
          </Button>
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
      </div>
    </form>
  );
}
