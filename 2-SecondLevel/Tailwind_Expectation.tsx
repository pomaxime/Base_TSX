export default function Hero() {
  return (
    <section className="bg-black text-white text-center py-20">
      <h1 className="text-5xl font-bold">
        Automatise ton business
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        Sans effort, sans technique
      </p>
    </section>
  )
}

// className="..." → classes CSS de Tailwind directement dans le JSX
// ultra rapide
// pas de fichiers CSS séparés

// bg-black → fond noir
// text-white → texte blanc
// text-center → texte centré
// py-20 → padding vertical de 20 (80px)
// text-5xl → taille de texte 5xl (48px)
// font-bold → texte en gras
// mt-4 → margin top de 4 (16px)
// text-lg → taille de texte large (18px)
// text-gray-400 → couleur de texte gris clair