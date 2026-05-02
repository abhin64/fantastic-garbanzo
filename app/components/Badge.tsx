interface Props {
  variant: "paid" | "premium" | "category";
  children?: React.ReactNode;
}

export default function Badge({ variant, children }: Props) {
  if (variant === "premium") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label text-white uppercase tracking-widest bg-ink shadow-subtle">
        <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
        {children ?? "Premium"}
      </span>
    );
  }

  if (variant === "paid") {
    return (
      <span
        className="inline-flex items-center px-2 py-0.5 rounded-full text-label uppercase tracking-widest border"
        style={{
          color: "var(--color-paid)",
          backgroundColor: "var(--color-paid-bg)",
          borderColor: "var(--color-paid-border)",
        }}
      >
        {children ?? "Paid"}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label text-ink-secondary border border-line bg-surface uppercase tracking-widest">
      {children ?? ""}
    </span>
  );
}
