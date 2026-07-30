import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("animate-[reveal_.8s_ease_both]", className)}>{children}</div>;
}
