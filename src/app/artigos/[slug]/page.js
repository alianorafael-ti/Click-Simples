import { artigos } from "@/data/artigos";
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "@/components/SiteHeader";
import CTASection from "@/components/CTASection";
import ArticleScene from "@/components/ArticleScene";
import FadeIn from "@/components/FadeIn";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const descricao =
    artigo.conteudoCompleto?.subtitulo ||
    "Conteúdo do Click Simples sobre marketing digital, tecnologia e presença digital para pequenos empreendedores.";

  return {
    title: artigo.titulo,

    description: descricao,

    alternates: {
      canonical: `/artigos/${artigo.slug}`,
    },

    openGraph: {
      title: artigo.titulo,
      description: descricao,
      url: `/artigos/${artigo.slug}`,
      type: "article",
    },
  };
}

export default async function PaginaArtigo({ params }) {
  const { slug } = await params;

  const artigo = artigos.find((item) => item.slug === slug);

  if (!artigo) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <SiteHeader />

        <main className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-500">
            Artigo não encontrado
          </h1>

          <p className="mt-4 text-zinc-400">
            O conteúdo que você procura não existe ou foi removido.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-blue-400 transition hover:text-blue-300 hover:underline"
          >
            Voltar para a página inicial
          </Link>
        </main>
      </div>
    );
  }

  const { conteudoCompleto } = artigo;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header interno:
          logo pequeno à esquerda
          botão Ver os guias à direita
      */}
      <SiteHeader />

      <main className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8">
        {/* Identidade principal do Click Simples */}

        <section className="border-b border-zinc-800 pb-12 pt-4 text-center sm:pb-14 sm:pt-8">
          <FadeIn direction="up">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              <span className="text-white">Click</span>{" "}
              <span className="text-blue-500">Simples</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Desmistificando a tecnologia e o marketing digital para pequenos
              empreendedores crescerem sem complicação.
            </p>
          </FadeIn>
        </section>

        {/* Título do artigo */}

        <FadeIn direction="up">
          <header className="pb-12 pt-14 sm:pb-14 sm:pt-16">
            <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              {artigo.titulo}
            </h2>

            {conteudoCompleto?.subtitulo && (
              <FadeIn direction="up" delay={0.15}>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9">
                  {conteudoCompleto.subtitulo}
                </p>
              </FadeIn>
            )}
          </header>
        </FadeIn>

        {/* Imagem principal do artigo */}

        {conteudoCompleto?.imagemHero && (
          <FadeIn direction="zoom" delay={0.25}>
            <div className="mx-auto mb-12 max-w-[1200px] overflow-hidden rounded-3xl">
              <Image
                src={conteudoCompleto.imagemHero}
                alt={`Ilustração do artigo ${artigo.titulo}`}
                width={1200}
                height={900}
                className="block h-auto w-full"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
          </FadeIn>
        )}

        {/* Seções alternadas do artigo */}

        {conteudoCompleto ? (
          <article className="w-full">
            {conteudoCompleto.secoes.map((secao, index) => (
              <ArticleScene
                key={`${artigo.slug}-${index}`}
                secao={secao}
                index={index}
                ultima={index === conteudoCompleto.secoes.length - 1}
              />
            ))}
          </article>
        ) : (
          <p className="py-10 text-center italic text-zinc-500">
            Em breve o texto completo deste artigo estará disponível.
          </p>
        )}

        <CTASection />
      </main>
    </div>
  );
}