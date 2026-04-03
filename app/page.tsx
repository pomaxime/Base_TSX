"use client" // nécessaire pour useState

import { useState } from "react"

// IMPORTS (adapte les chemins si besoin)
import Hero from "../Exercise/First/FirstComponentHero"
import Navbar from "../Exercise/Second/NavBar"
import AnimationMobile from "../Exercise/Third/AnimationAndMobile"

export default function Home() {

  // état pour choisir quel exo afficher
  const [active, setActive] = useState("hero")

  return (
    <div>

      {/* ===== MENU DE TEST ===== */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg flex gap-4 z-50">

        <button onClick={() => setActive("hero")}>
          Hero
        </button>

        <button onClick={() => setActive("navbar")}>
          Navbar
        </button>

        <button onClick={() => setActive("animation")}>
          Animation
        </button>

      </div>

      {/* ===== AFFICHAGE ===== */}

      {/* HERO */}
      {active === "hero" && (
        <Hero
          title="Automatise ton acquisition"
          subtitle="Sans technique, sans perte de temps"
          buttonText="Réserver un appel"
        />
      )}

      {/* NAVBAR */}
      {active === "navbar" && (
        <div className="h-[200vh]">
          <Navbar />
        </div>
      )}

      {/* ANIMATION / MOBILE */}
      {active === "animation" && (
        <div className="h-[200vh]">
          <AnimationMobile />
        </div>
      )}

    </div>
  )
}