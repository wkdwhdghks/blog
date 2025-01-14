import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mt-[64px] flex w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
