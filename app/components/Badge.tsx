interface Props {
  variant: "paid" | "premium" | "category";
  children?: React.ReactNode;
}

const defaultLabel: Record<Props["variant"], string> = {
  paid:     "Paid",
  premium:  "Premium",
  category: "",
};

export default function Badge({ variant, children }: Props) {
  // premium = category-level paid badge — gradient bg, white text
  if (variant === "premium") {
    return (
      <span
        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label text-white uppercase tracking-widest shadow-subtle"
        style={{ background: "var(--gradient-brand)" }}
      >
        {children ?? "Premium"}
      </span>
    );
  }

  // paid = card-level indicator — subtle orange tint
  if (variant === "paid") {
    return (
      <span
        className="inline-flex items-center px-2 py-0.5 rounded-full text-label text-paid uppercase tracking-widest border"
        style={{
          backgroundColor: "var(--color-paid-bg)",
          borderColor: "var(--color-paid-border)",
        }}
      >
        {children ?? "Paid"}
      </span>
    );
  }

  // category = neutral tag
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label text-ink-secondary border border-line bg-surface uppercase tracking-widest">
      {children ?? defaultLabel[variant]}
    </span>
  );
}
