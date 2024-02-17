"use client"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="accueil">
        <h1>Bienvenue sur la page d'accueil</h1>
        <h2>Pour jouer au shifumi cliquez sur le bouton jeu</h2>
        <Link href="/jeu"><button>Jeu</button></Link>
      </div>
    </>
  );
}
