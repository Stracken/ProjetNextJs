"use client"
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Table from "@/components/Table"

const jeu = () => {
  const [guess, setGuess] = React.useState("rien")
  const [ratio, setRatio] = React.useState(0)
  const [i, setI] = React.useState(0)
  const [w, setW] = React.useState(0)
  const [array, setArray] = React.useState(["Rock", "Paper", "Scissors"])
  const [r, setR] = React.useState("Appuyez sur valider")
  const [ordi, setOrdi] = React.useState("")
  const [username, setUsername] = React.useState("Anonyme")
  const [srcguess, setSrcguess] = React.useState("/Rockreverse.png")
  const [srcordi, setSrcordi] = React.useState("/Rock.png")


  const name = () => {
    setUsername(prompt('Votre nom ?'))
  }

  const f = () => {
    setGuess("Paper")
  }

  const p = () => {
    setGuess("Rock")
  }

  const c = () => {
    setGuess("Scissors")
  }

  const game = () => {
    let randomIndex = Math.floor(Math.random() * array.length)
    var O = array[randomIndex]

    if (guess === "Rock") {
      if (O === "Rock") {
        setR("Egalité")
      } else if (O === "Paper") {
        setR("Perdu!")
        setI(i + 1)
      } else {
        setI(i + 1)
        setW(w + 1)
        setR("Gagnez!")
      }
    } else if (guess === "Paper") {
      if (O === "Rock") {
        setR("Gagnez!")
        setI(i + 1)
        setW(w + 1)
      } else if (O === "Paper") {
        setR("Egalité")
      } else {
        setR("Perdu!")
        setI(i + 1)
      }
    } else if (guess === "Scissors") {
      if (O === "Rock") {
        setR("Perdu!")
        setI(i + 1)
      } else if (O === "Paper") {
        setR("Gagnez!")
        setI(i + 1)
        setW(w + 1)
      } else {
        setR("Egalité")
      }
    }
    console.log(username, guess, O, i, w)
    setRatio(Math.floor(100 * (w/i)))
    setOrdi(array[randomIndex])
    localStorage.setItem("username",username)
    localStorage.setItem("win%" , ratio)
    localStorage.setItem("try" , i)
    console.log(localStorage)
    setSrcguess("/"+guess+"reverse.png")
    setSrcordi("/"+O+".png")
  }

  function replace() {
    var elements = document.querySelectorAll('.main');

    elements.forEach(function(element) {
        element.classList.remove('main');
        element.classList.add('hide');
    });
}
function replacehideanim(){
  var elements = document.querySelectorAll('.hideanimation');

    elements.forEach(function(element) {
        element.classList.remove('hideanimation');
        element.classList.add('animation');
      });
      setTimeout(function(){
        document.getElementById("user1").className="hide";
        document.getElementById("user2").className="";
        document.getElementById("ordi1").className="hide";
        document.getElementById("ordi2").className="";
        document.getElementById("res").className="";
      }, 1500);
}

function replaceanim(){
  var elements = document.querySelectorAll('.animation'); 

    elements.forEach(function(element) {
        element.classList.remove('animation'); 
        element.classList.add('hideanimation'); 
      });
      setTimeout(function(){
        document.getElementById("user2").className="hide";
        document.getElementById("user1").className="image";
        document.getElementById("ordi2").className="hide";
        document.getElementById("ordi1").className="image";
        document.getElementById("res").className="hide";
      });
}

function replacehide() {
  var elements = document.querySelectorAll('.hide'); 

  elements.forEach(function(element) {
      element.classList.remove('hide'); 
      element.classList.add('main'); 
  });
}

  return (
    <>
      <div className="home">
        <Link href="/"><Image src="/home.png" alt="Home Image" width={50}  height={45} /></Link>
      </div>
      <div className="main">
            <button className="user" onClick={() => name()}>Username</button>
            <div>{username}</div>
            <div>{ratio}%</div>
            <div className="btnG">
              <Image className="image" src="/Rock.png" alt="Rock" width={100} height={100} onClick={() => p()}/>
              <Image className="image" src="/Paper.png" alt="Paper" width={100} height={100} onClick={() => f()}/>
              <Image className="image" src="/Scissors.png" alt="Scissors" width={100} height={100} onClick={() => c()}/>
            </div>
            <button onClick={() => {replace(), game(), replacehideanim()}} >Valider</button>
      </div>
      <div className="hideanimation">
        <div className="result">
          <Image id="user1" className="image" src="/Rockreverse.png" alt="user choice" width={100} height={100} />
          <Image id="user2" className="hide" src={srcguess} alt="user choice" width={100} height={100} />
          <Image id="ordi1" className="image" src="/Rock.png" alt="user choice" width={100} height={100}/>
          <Image id="ordi2" className="hide" src={srcordi} alt="computer choice" width={100} height={100}/>
        </div>
        <div id="res" className="hide">{r}</div>
        <button onClick={() => {replacehide(), replaceanim()}} >Ok</button>
      </div>
    
      <div className="table">
      <Table username={username} ratio={ratio} i={i} setUsername={setUsername} setRatio={setRatio} setI={setI} />
      </div>
      
    </>
  )
}

export default jeu