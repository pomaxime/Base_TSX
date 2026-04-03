type HeroProps = {
  title: string
  subtitle: string
  buttonText: string
}

export default function Hero({ title, subtitle, buttonText }: HeroProps) {
  return (
    <section className="bg-black text-white py-20 text-center"> // section avec un fond noir, texte blanc, padding vertical et centré
      <div className="max-w-3xl mx-auto px-4"> // div pour centrer le contenu et limiter la largeur, avec du padding horizontal

        <h1 className="text-5xl font-bold leading-tight">
          {title}
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          {subtitle}
        </p>

        <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition">
          {buttonText}
        </button>

      </div>
    </section>
  )
}

// type HeroProps → type pour les props du composant
// function Hero({ title, subtitle, buttonText }: HeroProps) → composant avec des props
// return (...) → JSX (HTML dans JS) avec des classes Tailwind pour le style
