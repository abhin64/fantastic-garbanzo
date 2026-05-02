interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: Props) {
  return (
    <main className={`min-h-screen bg-black ${className}`}>
      <div className="max-w-2xl mx-auto px-5 pt-12 pb-24">
        {children}
      </div>
    </main>
  );
}
