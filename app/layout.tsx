import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen bg-cover bg-center transition-all duration-300">
        {children}
      </body>
    </html>
  );
}