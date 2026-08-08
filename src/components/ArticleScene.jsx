"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ArticleScene({ secao, index = 0 }) {
  const paragrafos = secao.texto
    ? secao.texto
        .split(/\n\s*\n/)
        .map((paragrafo) => paragrafo.trim())
        .filter(Boolean)
    : [];

  /*
   * Alternância automática:
   *
   * index 0: imagem à esquerda
   * index 1: imagem à direita
   * index 2: imagem à esquerda
   * index 3: imagem à direita
   */
  const imagemEsquerda = index % 2 === 0;

  const larguraImagem = secao.larguraImagem || 560;
  const larguraTexto = secao.larguraTexto || 600;

  /*
   * Novo modo opcional.
   *
   * textoFluido: true
   * permite que o texto contorne a imagem.
   *
   * paragrafosAntesImagem
   * define quantos parágrafos aparecem antes da imagem.
   */
  const textoFluido = secao.textoFluido || false;
  const paragrafosAntesImagem = secao.paragrafosAntesImagem || 0;

  const paragrafosAntes = paragrafos.slice(0, paragrafosAntesImagem);
  const paragrafosDepois = paragrafos.slice(paragrafosAntesImagem);

  // Seção somente com texto
  if (!secao.imagem) {
    return (
      <section className="py-10 lg:py-16">
        <FadeIn direction="up">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold leading-tight text-white lg:text-4xl">
              {secao.titulo}
            </h2>

            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              {paragrafos.map((paragrafo, paragrafoIndex) => (
                <p key={paragrafoIndex}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="py-10 lg:py-16">
      {/* CELULAR E TABLET */}
      <div className="lg:hidden">
        <FadeIn direction="up">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white">
            {secao.titulo}
          </h2>
        </FadeIn>

        <FadeIn direction="zoom" delay={0.1}>
          <div className="mx-auto mb-8 max-w-[650px] overflow-hidden rounded-3xl">
            <Image
              src={secao.imagem}
              alt={secao.titulo}
              width={1200}
              height={900}
              className="block h-auto w-full"
              sizes="100vw"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            {paragrafos.map((paragrafo, paragrafoIndex) => (
              <p key={paragrafoIndex}>{paragrafo}</p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* COMPUTADOR */}
      <div className="hidden lg:block">
        <FadeIn direction="up">
          <h2 className="mb-10 text-4xl font-bold leading-tight text-white">
            {secao.titulo}
          </h2>
        </FadeIn>

        {/* NOVO LAYOUT COM TEXTO ENVOLVENDO A IMAGEM */}
        {textoFluido ? (
          <div>
            {/* Parágrafos que aparecem antes da imagem */}
            {paragrafosAntes.length > 0 && (
              <FadeIn direction="up">
                <div className="mb-7 space-y-5 text-lg leading-8 text-zinc-300">
                  {paragrafosAntes.map((paragrafo, paragrafoIndex) => (
                    <p key={paragrafoIndex}>{paragrafo}</p>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* Imagem flutuante */}
            <div
              className={
                imagemEsquerda
                  ? "float-left mb-6 mr-10"
                  : "float-right mb-6 ml-10"
              }
              style={{
                width: `${larguraImagem}px`,
                maxWidth: "48%",
              }}
            >
              <FadeIn direction={imagemEsquerda ? "left" : "right"}>
                <Image
                  src={secao.imagem}
                  alt={secao.titulo}
                  width={1200}
                  height={900}
                  className="block h-auto w-full rounded-3xl transition-transform duration-500 hover:scale-[1.02]"
                  sizes={`${larguraImagem}px`}
                />
              </FadeIn>
            </div>

            {/* Texto que contorna a imagem */}
            <FadeIn direction="up" delay={0.15}>
              <div className="space-y-5 text-lg leading-8 text-zinc-300">
                {paragrafosDepois.map((paragrafo, paragrafoIndex) => (
                  <p key={paragrafoIndex}>{paragrafo}</p>
                ))}
              </div>
            </FadeIn>

            {/* Impede a próxima seção de subir ao lado da imagem */}
            <div className="clear-both" />
          </div>
        ) : (
          /* LAYOUT ANTIGO — permanece intacto */
          <div
            className={`flex items-center justify-between gap-14 xl:gap-20 ${
              imagemEsquerda ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Imagem */}
            <FadeIn direction={imagemEsquerda ? "left" : "right"}>
              <div
                style={{
                  width: `${larguraImagem}px`,
                  maxWidth: "100%",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={secao.imagem}
                  alt={secao.titulo}
                  width={1200}
                  height={900}
                  className="block h-auto w-full rounded-3xl transition-transform duration-500 hover:scale-[1.02]"
                  sizes={`${larguraImagem}px`}
                />
              </div>
            </FadeIn>

            {/* Texto */}
            <FadeIn direction="up" delay={0.15}>
              <div
                style={{
                  width: `${larguraTexto}px`,
                  maxWidth: "100%",
                }}
              >
                <div className="space-y-5 text-lg leading-8 text-zinc-300">
                  {paragrafos.map((paragrafo, paragrafoIndex) => (
                    <p key={paragrafoIndex}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}