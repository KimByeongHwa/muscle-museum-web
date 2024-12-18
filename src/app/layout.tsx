import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="h-screen w-screen">
        <header>Header</header>
        <main>{children}</main>
        <footer className="sticky bottom-0">Footer</footer>
      </body>
    </html>
  );
}
