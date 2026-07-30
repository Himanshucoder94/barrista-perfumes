import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[#C6A66B]/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#C6A66B]">
      {children}
    </span>
  );
}
