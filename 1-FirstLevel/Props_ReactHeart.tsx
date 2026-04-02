type Props = {
  title: string
  subtitle: string
}

export default function Hero({ title, subtitle }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

// function Hero({ title, subtitle }: Props) → composant avec des props
// return (...) → JSX (HTML dans JS)
// {title} → injecte une variable dans le HTML
// {subtitle} → injecte une variable dans le HTML
// : Props → typage TypeScript
