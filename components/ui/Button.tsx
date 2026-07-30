import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

const styles = {
  primary:
    "relative overflow-hidden border border-[#C6A66B] bg-[#C6A66B] text-[#090909] shadow-[0_18px_50px_rgba(198,166,107,.18)] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition before:duration-700 hover:border-[#F3EEE5] hover:bg-[#F3EEE5] hover:before:translate-x-full",
  secondary:
    "border border-[#C6A66B]/45 bg-white/[.025] text-[#F3EEE5] shadow-[inset_0_1px_0_rgba(255,248,234,.08)] backdrop-blur hover:border-[#C6A66B] hover:bg-[#C6A66B]/10",
  ghost: "border border-transparent text-[#F3EEE5] hover:border-[#C6A66B]/35 hover:bg-white/5",
};

interface BaseProps {
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}

export function ButtonLink({
  children,
  variant = "primary",
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      {...props}
      className={clsx(
        "magnetic inline-flex min-h-11 max-w-full items-center justify-center gap-2 px-5 py-3 text-center text-sm font-semibold uppercase leading-5 tracking-[0.18em]",
        styles[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={type}
      className={clsx(
        "magnetic inline-flex min-h-11 max-w-full items-center justify-center gap-2 px-5 py-3 text-center text-sm font-semibold uppercase leading-5 tracking-[0.18em]",
        styles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
