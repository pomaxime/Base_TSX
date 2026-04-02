type HeroProps = {
  title: string // type string pour le titre
  subtitle: string // type string pour le sous-titre
  buttonText: string // type string pour le texte du bouton
}

export default function Hero({ title, subtitle, buttonText }: HeroProps) {
  return (
    <section className="text-center py-20 bg-black text-white"> // texte centré, padding vertical, fond noir, texte blanc
      <h1 className="text-5xl font-bold"> // classe pour le titre : taille 5xl, gras
        {title}
      </h1>

      <p className="mt-4 text-lg text-black-400"> // classe pour le sous-titre : margin top, taille large, couleur gris clair
        {subtitle}
      </p>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded"> // classe pour le bouton : margin top, padding horizontal et vertical, fond noir, texte blanc, bord arrondi
        {buttonText}
      </button>
    </section>
  )
}

// type HeroProps → type pour les props du composant
// function Hero({ title, subtitle, buttonText }: HeroProps) → composant avec des props
// return (...) → JSX (HTML dans JS) avec des classes Tailwind pour le style
