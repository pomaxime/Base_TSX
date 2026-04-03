import { useEffect, useState } from "react"

export default function Navbar() {

  // état pour savoir si on a scroll
  const [scrolled, setScrolled] = useState(false)

  // état pour ouvrir/fermer le menu mobile
  const [menuOpen, setMenuOpen] = useState(false)

  // gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50) // true si scroll > 50px
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll) // cleanup
    }
  }, [])

  return (
    <nav
      // navbar fixe + animation + style dynamique
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >

      {/* Container pour centrer le contenu */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="font-bold text-xl">
          Logo
        </div>

        {/* ===== MENU DESKTOP ===== */}
        <div className="hidden md:flex items-center gap-10">

          {/* lien */}
          <a 
            href="#social-proof"
            className="text-gray-700 hover:text-black transition"
          >
            Social Proof
          </a>

          {/* bouton CTA */}
          <a 
            href="#contact"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Contact
          </a>

        </div>

        {/* ===== BOUTON BURGER (mobile uniquement) ===== */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)} // toggle menu
        >
          {/* lignes du burger */}
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

      </div>

      {/* ===== MENU MOBILE ===== */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-500
          ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white">

          <a href="#social-proof" onClick={() => setMenuOpen(false)}>
            Social Proof
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>
      </div>

    </nav>
  )
}