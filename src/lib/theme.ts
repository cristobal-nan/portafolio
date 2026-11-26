export const THEME_STORAGE_KEY = "portfolio-theme";

export type ThemeMode = "light" | "dark";

/**
 * Executed synchronously in <head> before paint to prevent theme FOUC.
 * Reads stored preference first, falling back to OS prefers-color-scheme.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k='${THEME_STORAGE_KEY}';var s=localStorage.getItem(k);var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
