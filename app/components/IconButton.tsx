interface Props {
  onClick: () => void;
  "aria-label": string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function IconButton({
  onClick,
  "aria-label": ariaLabel,
  children,
  variant = "dark",
  className = "",
}: Props) {
  const styles =
    variant === "dark"
      ? "bg-white/10 hover:bg-white/[0.18] text-white"
      : "bg-ink/[0.06] hover:bg-ink/[0.10] text-ink";

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-150 flex-shrink-0 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
