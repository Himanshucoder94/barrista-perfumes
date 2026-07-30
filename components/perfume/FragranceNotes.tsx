export function FragranceNotes({ title, notes }: { title: string; notes: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#F3EEE5]">{notes.join(", ")}</p>
    </div>
  );
}
