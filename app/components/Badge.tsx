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
  const isPaidVariant = variant === "paid" || variant === "premium";

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-label uppercase tracking-widest ${
        isPaidVariant
          ? "text-paid border"
          : "text-ink-secondary border border-line bg-surface"
      }`}
      style={
        isPaidVariant
          ? {
              backgroundColor: "var(--color-paid-bg)",
              borderColor: "var(--color-paid-border)",
            }
          : undefined
      }
    >
      {children ?? defaultLabel[variant]}
    </span>
  );
}
