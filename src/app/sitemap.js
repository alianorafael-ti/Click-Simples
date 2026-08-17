import { artigos } from "@/data/artigos";

export default function sitemap() {
  const baseUrl = "https://clicksimples.aliano.com.br";

  const paginasArtigos = artigos.map((artigo) => ({
    url: `${baseUrl}/artigos/${artigo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...paginasArtigos,
  ];
}