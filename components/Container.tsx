export default function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-7xl px-6 md:px-12">{children}</div>;
}
