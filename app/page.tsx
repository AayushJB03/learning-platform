import { Logo } from "@/components/layout/logo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
      <Logo />
      <h1 className="text-display-2">Learn at the exact moment</h1>
      <p className="text-body-lg text-neutral-500">Vertex is coming together.</p>
    </main>
  );
}
