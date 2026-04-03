import { useEffect, useState } from "react" // hooks React pour gérer état + effets

// Type des props (vide ici car on gère tout en interne)
type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  // state pour savoir si on a scroll ou non
  const [scrolled, setScrolled] = useState(false)

  // useEffect = exécuté après le rendu du composant
  useEffect(() => {

    // fonction appelée à chaque scroll
    const handleScroll = () => {
      // window.scrollY = nombre de pixels scrollés verticalement
      if (window.scrollY > 50) {
        setScrolled(true) // on active le mode "scrollé"
      } else {
        setScrolled(false) // on revient à l’état normal
      }
    }

    // on écoute l’événement scroll
    window.addEventListener("scroll", handleScroll)

    // cleanup (très important) :
    // évite les fuites mémoire quand le composant disparaît
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, []) // [] = exécuté une seule fois au montage

  return (
    <nav
      // className dynamique selon l’état scrolled
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-gray-200" // navbar compacte + fond
          : "py-5 bg-transparent" // navbar large + transparente
      }`}
    >

      {/* Logo (à remplacer plus tard par une vraie image) */}
      <div className="font-bold text-lg">
        Logo
      </div>

      {/* Liens de navigation */}
      <div className="flex items-center gap-10">

        {/* Lien vers section preuve sociale */}
        <a 
          href="#social-proof" 
          className="text-gray-700 hover:text-black transition"
        >
          Preuve Social
        </a>

        {/* Bouton CTA (Call To Action) */}
        <a 
          href="#contact" 
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Contact
        </a>

      </div>

    </nav>
  )
}

// Navbar → composant de barre de navigation
// scrolled → état pour savoir si on a scrollé ou pas
// useEffect → écoute le scroll pour mettre à jour l’état
// className dynamique → change le style de la navbar selon l’état scrolled
// fixed top-0 left-0 right-0 → navbar fixe en haut de la page
// transition-all duration-300 → transition fluide pour les changements de style
// Logo → placeholder pour le logo du site
// Liens de navigation → permettent de naviguer vers différentes sections du site
// href="#social-proof" → lien vers la section de preuve sociale
// href="#contact" → lien vers la section de contact
// hover:text-black → change la couleur du texte au survol
// bg-black text-white → style du bouton CTA
// hover:bg-gray-800 → change la couleur du bouton au survol