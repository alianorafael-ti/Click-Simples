"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function ArticleScene({ secao }) {
  const paragrafos = secao.texto
    ? secao.texto
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const imagemEsquerda = secao.layout === "imagem-esquerda";

  const larguraImagem = secao.larguraImagem || 560;
  const larguraTexto = secao.larguraTexto || 620;

  // Seção somente texto
  if (!secao.imagem) {
    return (
      <section className="py-20">
        <FadeIn direction="up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              {secao.titulo}
            </h2>

            <div className="space-y-5 text-lg leading-8 text-zinc-300">
              {paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="py-20">

      {/* MOBILE */}

      <div className="lg:hidden">

        <FadeIn direction="up">
          <h2 className="text-3xl font-bold text-white mb-6">
            {secao.titulo}
          </h2>
        </FadeIn>

        <FadeIn direction="zoom" delay={0.1}>
          <div
            className="relative w-full mb-8 overflow-hidden rounded-3xl"
            style={{ aspectRatio: "4 / 3" }}
          >
            <Image
              src={secao.imagem}
              alt={secao.titulo}
              fill
              className="object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="space-y-5 text-lg leading-8 text-zinc-300">
            {paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>

      </div>

      {/* DESKTOP */}

      <div className="hidden lg:block">

        <FadeIn direction="up">
          <h2 className="text-4xl font-bold text-white mb-10">
            {secao.titulo}
          </h2>
        </FadeIn>

        <div
          className={`flex items-center gap-20 ${
            imagemEsquerda ? "" : "flex-row-reverse"
          }`}
        >

          {/* IMAGEM */}

          <FadeIn direction={imagemEsquerda ? "left" : "right"}>
            <div
              style={{
                width: larguraImagem,
                flexShrink: 0,
              }}
            >
              <div
                className="relative overflow-hidden rounded-3xl"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                }}
              >
                <Image
                  src={secao.imagem}
                  alt={secao.titulo}
                  fill
                  className="object-contain transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </FadeIn>

          {/* TEXTO */}

          <FadeIn direction="up" delay={0.15}>
            <div
              style={{
                width: larguraTexto,
              }}
            >
              <div className="space-y-5 text-lg leading-8 text-zinc-300">
                {paragrafos.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>

      </div>

    </section>
  );
}