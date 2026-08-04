"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export default function SiteHeader({ variante = "interna" }) {
  const reduzirMovimento = useReducedMotion();
  const paginaInicial = variante === "home";

  const animacaoLogo = reduzirMovimento
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4 },
      }
    : {
        initial: {
          opacity: 0,
          scale: 0.65,
        },
        animate: {
          opacity: 1,
          scale: [0.65, 1.12, 0.96, 1.04, 1],
          rotate: [0, -1.8, 1.8, -0.8, 0],
          x: [0, -3, 3, -1, 0],
        },
        transition: {
          duration: 1,
          ease: "easeOut",
          times: [0, 0.45, 0.7, 0.88, 1],
        },
      };

  if (paginaInicial) {
    return (
      <header className="border-b border-zinc-800 bg-zinc-950 px-5 py-12 text-center sm:py-16">
        <motion.div
          initial={animacaoLogo.initial}
          animate={animacaoLogo.animate}
          transition={animacaoLogo.transition}
          className="inline-block origin-center"
        >
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            <span className="text-white">Click</span>{" "}
            <span className="text-blue-500">Simples</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            delay: reduzirMovimento ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl"
        >
          Desmistificando a tecnologia e o marketing digital para pequenos
          empreendedores crescerem sem complicação.
        </motion.p>
      </header>
    );
  }

  return (
    <header className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
        <Link
          href="/"
          aria-label="Voltar para a página inicial"
          className="inline-block"
        >
          <motion.div
            initial={animacaoLogo.initial}
            animate={animacaoLogo.animate}
            transition={{
              ...animacaoLogo.transition,
              duration: reduzirMovimento ? 0.4 : 0.75,
            }}
            className="origin-left"
          >
            <span className="text-2xl font-black tracking-tight sm:text-3xl">
              <span className="text-white">Click</span>{" "}
              <span className="text-blue-500">Simples</span>
            </span>
          </motion.div>
        </Link>

        <Link
          href="/#guias"
          className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/20 hover:text-blue-300"
        >
          Ver os guias
        </Link>
      </div>
    </header>
  );
}