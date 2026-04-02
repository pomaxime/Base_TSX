import { useState } from "react"

export default function Button() {
  const [clicked, setClicked] = useState(false)

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? "Merci !" : "Clique moi"}
    </button>
  )
}

// Tu rends ton site vivant.

// useState(false) → état local du composant, initialisé à false
// onClick={() => setClicked(true)} → au clic, on change l'état clicked à true
// {clicked ? "Merci !" : "Clique moi"} → affiche "Merci !" si clicked est true, sinon "Clique moi"