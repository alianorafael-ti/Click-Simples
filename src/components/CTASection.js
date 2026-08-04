"use client";

import { motion, useReducedMotion } from "motion/react";

export default function CTASection() {
  const reduzirMovimento = useReducedMotion();

  return (
    <div
      className="my-14"
      style={{
        perspective: "1200px",
      }}
    >
      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        whileHover={
          reduzirMovimento
            ? {}
            : {
                rotateY: [0, -5, 5, -2, 0],
                rotateX: [0, 1.5, -1.5, 0],
                scale: 1.015,
              }
        }
        transition={{
          opacity: {
            duration: 0.6,
          },
          y: {
            duration: 0.6,
          },
          rotateY: {
            duration: 0.75,
            ease: "easeInOut",
          },
          rotateX: {
            duration: 0.75,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.3,
          },
        }}
        className="rounded-2xl bg-blue-600 px-6 py-12 text-center text-white shadow-lg sm:px-10"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          whileHover={
            reduzirMovimento
              ? {}
              : {
                  translateZ: 18,
                }
          }
          transition={{
            duration: 0.3,
          }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            Pronto para colocar sua empresa na internet?
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-8 text-blue-100">
            Não se preocupe com a parte técnica. Eu ajudo a construir a
            presença digital ideal para o seu negócio de forma simples e
            transparente.
          </p>

          <motion.a
            href="https://www.aliano.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="inline-block rounded-full bg-white px-8 py-3 font-bold text-blue-600 shadow-md transition-colors hover:bg-blue-50"
          >
            Conheça o meu portfólio
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}