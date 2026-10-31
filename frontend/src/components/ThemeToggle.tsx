
"use client";

import { useTheme, Theme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: {
    value: Theme;
    label: string;
    symbol: string;
  }[] = [
    {
      value: "light",
      label: "Light",
      symbol: "☀",
    },
    {
      value: "dark",
      label: "Dark",
      symbol: "☾",
    },
    {
      value: "system",
      label: "System",
      symbol: "◐",
    },
  ];

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label="Choose appearance"
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setTheme(option.value)}
          aria-pressed={theme === option.value}
          className={`theme-option ${
            theme === option.value ? "selected" : ""
          }`}
          title={`${option.label} theme`}
        >
          <span aria-hidden="true">{option.symbol}</span>
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
