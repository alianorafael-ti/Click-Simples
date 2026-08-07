import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-[#050608]">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">

        <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <span className="text-white">Click</span>{" "}
          <span className="text-blue-600">Simples</span>
        </h3>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
          Desmistificando a tecnologia e o marketing digital para pequenos
          empreendedores crescerem sem complicação.
        </p>

        <p className="mt-3 text-sm sm:text-base text-white/60 italic">
          Aprender tecnologia não precisa ser complicado. Um passo de cada vez.
        </p>

        

        <div className="mt-9 border-t border-white/15 pt-6 text-sm text-white/55">
          © {new Date().getFullYear()} Click Simples • Desenvolvido por{" "}
          <span className="font-semibold text-blue-500">
            Aliano Rafael da Silva
          </span>
        </div>

      </div>
    </footer>
  );
}