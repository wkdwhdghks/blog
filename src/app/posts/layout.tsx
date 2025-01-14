export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto mt-12 w-full max-w-[1024px] px-4">{children}</section>;
}
