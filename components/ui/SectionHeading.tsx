import type { ReactNode } from "react";
import { Badge } from "./Badge";

export function SectionHeading({
  label,
  title,
  children,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {label ? <Badge>{label}</Badge> : null}
      <h2 className="mt-5 text-balance font-serif text-4xl leading-[0.98] text-[#F3EEE5] sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      <div className="metal-line mx-auto mt-7 h-px w-28" />
      {children ? <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#A7A29A] sm:text-lg">{children}</p> : null}
    </div>
  );
}
