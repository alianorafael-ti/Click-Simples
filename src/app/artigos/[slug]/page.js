import { artigos } from "@/data/artigos";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import ArticleScene from "@/components/ArticleScene";
import FadeIn from "@/components/FadeIn";

export default async function PaginaArtigo({ params }) {
  // 1. Pegamos o slug que veio da URL (ex: "o-que-e-marketing-digital")
  const { slug } = await params;

  // 2. Procuramos no arquivo artigos.js o artigo que tem esse mesmo slug
  const artigo = artigos.find((item) => item.slug === slug);

  // 3. Se o artigo não for encontrado (ex: link digitado errado)
  if (!artigo) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">Artigo não encontrado!</h1>
        <p className="mt-4 text-gray-600">O conteúdo que você procura não existe ou foi removido.</p>
        <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
          ← Voltar para a página inicial
        </Link>
      </main>
    );
  }

  const { conteudoCompleto } = artigo;

  return (
   <main className="max-w-[1400px] mx-auto px-8 py-10">
      {/* Botão de Voltar */}
     

      {/* Cabeçalho do Artigo */}
    <FadeIn direction="up">
  <header className="mb-14">

    <Link
      href="/"
      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition mb-10"
    >
      ← Voltar para os guias
    </Link>

    <FadeIn delay={0.15}>
      <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-sm font-semibold uppercase tracking-wider">
        {artigo.icone} Guia
      </span>
    </FadeIn>

    <FadeIn delay={0.25}>
      <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white max-w-4xl">
        {artigo.titulo}
      </h1>
    </FadeIn>

    {conteudoCompleto?.subtitulo && (
      <FadeIn delay={0.35}>
        <p className="mt-5 max-w-3xl text-xl leading-9 text-zinc-400">
          {conteudoCompleto.subtitulo}
        </p>
      </FadeIn>
    )}

    <FadeIn delay={0.45}>
      <div className="mt-10 h-px bg-zinc-800"></div>
    </FadeIn>

  </header>
</FadeIn>

     {conteudoCompleto?.imagemHero && (
  <FadeIn direction="zoom" delay={0.45}>
    <div className="mb-10 overflow-hidden rounded-3xl">
      <Image
        src={conteudoCompleto.imagemHero}
        alt={`Ilustração do artigo ${artigo.titulo}`}
        width={1536}
        height={1024}
        className="w-full h-auto"
        priority
      />
    </div>
  </FadeIn>
)}

      {/* Conteúdo do Texto */}
{conteudoCompleto ? (
  <article className="prose lg:prose-lg text-gray-800 leading-relaxed">

   {conteudoCompleto.secoes.map((secao, index) => (
  <ArticleScene
    key={index}
    secao={secao}
    index={index}
    ultima={index === conteudoCompleto.secoes.length - 1}
  />
))}

  </article>
) : (
        <p className="text-gray-500 italic py-8">
          Em breve o texto completo deste artigo estará disponível!
        </p>
      )}

      {/* Chamada para o Portfólio no final da leitura */}
      <CTASection />
    </main>
  );
}