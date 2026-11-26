"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/Icons";
import { THEME_STORAGE_KEY } from "@/lib/theme";

interface ThemeToggleProps {
  switchToDarkLabel: string;
  switchToLightLabel: string;
}

const THEME_CHANGE_EVENT = "portfolio-theme-change";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }
  const onChange = () => callback();
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): boolean {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot(): null {
  return null;
}

export function ThemeToggle({
  switchToDarkLabel,
  switchToLightLabel,
}: ThemeToggleProps) {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function handleToggle() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextIsDark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light");
    } catch {
      // Ignore storage errors in private/restricted browsers
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  const ariaLabel =
    isDark === true ? switchToLightLabel : switchToDarkLabel;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={ariaLabel}
      title={ariaLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-secondary transition-colors hover:border-border-strong hover:text-primary"
    >
      <SunIcon className="hidden h-4 w-4 dark:block" />
      <MoonIcon className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
