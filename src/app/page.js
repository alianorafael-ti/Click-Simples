import { artigos } from "@/data/artigos";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Hero Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Click <span className="text-blue-600">Simples</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
          Desmistificando a tecnologia e o marketing digital para pequenos empreendedores crescerem sem complicação.
        </p>
      </header>

      {/* Grid de Artigos */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  {artigos.map((item) => (
    <Link 
      key={item.slug} 
      href={`/artigos/${item.slug}`}
      className="block border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all bg-white"
    >
      <span className="text-4xl mb-4 block">{item.icone}</span>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.titulo}</h3>
      <p className="text-gray-600">{item.resumo}</p>
    </Link>
  ))}
</section>

      {/* Chamada para o Portfólio Aliano */}
      <CTASection />
    </main>
  );
}