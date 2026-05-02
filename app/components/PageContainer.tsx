interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: Props) {
  return (
    <main className={`min-h-screen bg-surface-subtle ${className}`}>
      <div className="max-w-2xl mx-auto px-5 pb-24">
        {children}
      </div>
    </main>
  );
}
