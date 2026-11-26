"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/Icons";

interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

export function CopyEmailButton({
  email,
  copyLabel,
  copiedLabel,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are blocked
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-subtle"
      aria-live="polite"
    >
      {copied ? (
        <>
          <CheckIcon className="h-4 w-4 text-accent" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <CopyIcon className="h-4 w-4 text-muted" />
          <span>{copyLabel}</span>
        </>
      )}
    </button>
  );
}
