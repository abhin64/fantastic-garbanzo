interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = "" }: Props) {
  return (
    <main className={`min-h-screen bg-[#F9F6F2] ${className}`}>
      <div className="max-w-2xl mx-auto pb-24">
        {children}
      </div>
    </main>
  );
}
