interface Props {
  onClick: () => void;
  "aria-label": string;
  children: React.ReactNode;
  className?: string;
}

export default function IconButton({
  onClick,
  "aria-label": ariaLabel,
  children,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/[0.18] text-white transition-colors duration-150 flex-shrink-0 ${className}`}
    >
      {children}
    </button>
  );
}
