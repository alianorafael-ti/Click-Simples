"use client";

export default function PortfolioButton() {
  return (
    <a
      href="https://www.aliano.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conheça meu portfólio"
      className="
        group
        fixed
        right-5
        bottom-24
        z-50
        flex
        h-12
        items-center
        overflow-hidden
        rounded-xl
        border
        border-slate-300
        bg-slate-900
        px-3
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <span className="text-lg">💼</span>

      <span
        className="
          max-w-0
          overflow-hidden
          whitespace-nowrap
          text-sm
          font-medium
          text-white
          opacity-0
          transition-all
          duration-300
          group-hover:ml-2
          group-hover:max-w-24
          group-hover:opacity-100
        "
      >
        Portfólio
      </span>
    </a>
  );
}