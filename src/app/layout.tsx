import '@/styles/globals.css';
import { ThemeProvider } from '@/components/common/dark-mode/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/common/AppSidebar';
import Header from '@/components/common/layout/Header';
import Footer from '@/components/common/layout/Footer';
import { notoSansKr } from '@/constants/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={process.env.NODE_ENV === 'production'}>
      <body className={`${notoSansKr.variable} font-noto_sans_kr scrollbar-hide`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider className="flex-1">
            <AppSidebar />
            <div className="flex-1">
              <div className="h-auto min-h-full pb-16">
                <Header />
                <main className="layout-padding mx-auto max-w-screen-2xl">{children}</main>
              </div>
              <Footer />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
