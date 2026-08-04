import { artigos } from "@/data/artigos";
import CTASection from "@/components/CTASection";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header animado da página inicial */}
      <SiteHeader variante="home" />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Grid de artigos */}
        <section
          id="guias"
          className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {artigos.map((item) => (
            <Link
              key={item.slug}
              href={`/artigos/${item.slug}`}
              className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-blue-950/20"
            >
              <span className="mb-4 block text-4xl transition-transform duration-300 group-hover:scale-110">
                {item.icone}
              </span>

              <h2 className="mb-3 text-xl font-bold text-zinc-100 transition-colors group-hover:text-blue-400">
                {item.titulo}
              </h2>

              <p className="leading-7 text-zinc-400">
                {item.resumo}
              </p>
            </Link>
          ))}
        </section>

        {/* Chamada para o portfólio */}
        <CTASection />
      </main>
    </div>
  );
}