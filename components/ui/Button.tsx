import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

const styles = {
  primary:
    "border border-[#C6A66B] bg-[#C6A66B] text-[#090909] hover:bg-[#F3EEE5] hover:border-[#F3EEE5]",
  secondary:
    "border border-[#C6A66B]/45 text-[#F3EEE5] hover:border-[#C6A66B] hover:bg-[#C6A66B]/10",
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
        "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition",
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
        "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition",
        styles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
}
