import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  variant?: "hero" | "primary" | "secondary" | "ghost" | "theme-switch";
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const variants = {
    // Hero Carosuel controls
    hero: "p-2 border border-white/20 bg-white/10 hover:bg-white/20",
    // primary
    primary: "px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white",
    // secondary
    secondary: "px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white",
    // ghost
    ghost: "px-4 py-2 hover:bg-white/10",
    // Theme switch
    "theme-switch":
      "flex rounded-lg border transition border-[#fff3] bg-white/10 hover:bg-white/20 active:bg-white/30 ",
  };

  return (
    <button
      className={`rounded-lg transition-all active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
