"use client"
import React, { useState } from "react"
import Link from "next/link"

const jeu = () => {
  const [guess, setGuess] = React.useState("rien")
  const [ratio, setRatio] = React.useState(0)
  const [i, setI] = React.useState(0)
  const [w, setW] = React.useState(0)
  const [array, setArray] = React.useState(["Pierre", "Feuille", "Ciseaux"])
  const [r, setR] = React.useState("Appuyez sur valider")
  const [ordi, setOrdi] = React.useState("")
  const [username, setUsername] = React.useState("Anonyme")


  const name = () => {
    setUsername(prompt('Votre nom ?'))
  }

  const f = () => {
    setGuess("Feuille")
  }

  const p = () => {
    setGuess("Pierre")
  }

  const c = () => {
    setGuess("Ciseaux")
  }

  const game = () => {
    let randomIndex = Math.floor(Math.random() * array.length)
    var O = array[randomIndex]

    if (guess === "Pierre") {
      if (O === "Pierre") {
        setR("Egalité")
      } else if (O === "Feuille") {
        setR("Perdu!")
        setI(i + 1)
      } else {
        setI(i + 1)
        setW(w + 1)
        setR("Gagnez!")
      }
    } else if (guess === "Feuille") {
      if (O === "Pierre") {
        setR("Gagnez!")
        setI(i + 1)
        setW(w + 1)
      } else if (O === "Feuille") {
        setR("Egalité")
      } else {
        setR("Perdu!")
        setI(i + 1)
      }
    } else if (guess === "Ciseaux") {
      if (O === "Pierre") {
        setR("Perdu!")
        setI(i + 1)
      } else if (O === "Feuille") {
        setR("Gagnez!")
        setI(i + 1)
        setW(w + 1)
      } else {
        setR("Egalité")
      }
    }
    console.log(username, guess, O, i, w)
    let z = i / w
    setRatio(Math.floor(100 / z))
    setOrdi(array[randomIndex])
    
  }

  return (
    <>
      <Link href="/"><button>Home</button></Link>
      <div className="main">
            <button onClick={() => name()}>Username</button>
            <div>{username}</div>
            <div>{ratio}%</div>
            <div className="btnG">
              <button className="gray" onClick={() => p()}>Pierre</button>
              <button className="green" onClick={() => f()}>Feuille</button>
              <button className="red" onClick={() => c()}>Ciseaux</button>
            </div>
            <div>Vous allez jouer {guess}</div>
            <div>L'ordinateur a joué {ordi}</div>
            <button onClick={game}>Valider</button>
            <div>{r}</div>
      </div>
    
      <div className="table">
      <table>
  <caption>
    LeaderBoard
  </caption>
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">% Win</th>
      <th scope="col">Nombre d'essai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{username}</th>
      <td>{ratio}</td>
      <td>{i}</td>
    </tr>
  </tbody>
</table>
      </div>
      
    </>
  )
}

export default jeu