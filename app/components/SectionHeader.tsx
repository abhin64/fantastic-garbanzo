import Badge from "./Badge";

interface Props {
  title: string;
  count?: number;
  isPaid?: boolean;
}

export default function SectionHeader({ title, count, isPaid }: Props) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-h3 text-ink">{title}</h2>
        {isPaid && <Badge variant="premium" />}
      </div>
      {count !== undefined && (
        <span className="text-label text-ink-disabled uppercase tracking-widest">
          {count}
        </span>
      )}
    </div>
  );
}
