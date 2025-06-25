// app/review-events/layout.tsx
export default function ReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h2 className="text-xl font-bold">Panel de Revisión de Eventos</h2>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
