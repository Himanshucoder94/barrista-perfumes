"use client";

import { clsx } from "clsx";
import type { PerfumeFilter } from "@/lib/catalogue";

export function PerfumeFilters({
  filters,
  activeFilter,
  onChange,
}: {
  filters: PerfumeFilter[];
  activeFilter: PerfumeFilter;
  onChange: (filter: PerfumeFilter) => void;
}) {
  return (
    <div className="mb-10 overflow-x-auto pb-2">
      <div className="flex min-w-max gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={clsx(
              "border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition",
              activeFilter === filter
                ? "border-[#C6A66B] bg-[#C6A66B] text-[#090909]"
                : "border-white/12 text-[#A7A29A] hover:border-[#C6A66B]/45 hover:text-[#F3EEE5]",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
