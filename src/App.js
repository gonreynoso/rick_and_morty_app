import Cards from "./components/cards/Cards.jsx"
import Nav from "./components/navbar/Nav.jsx"
import React from 'react';
import { useState } from "react";
// import { useState } from "react";
// let apikey = "208915502015.5ad33e85904a79bab279"


// function onSearch(character) {
//   fetch(`https://rickandmortyapi.com/api/character/${character}`)
//      .then((response) => response.json())
//      .then((data) => {
//         if (data.name) {
//            setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//            window.alert('No hay personajes con ese ID');
//         }
//      });
// }


const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api"
  const KEY = "208915502015.5ad33e85904a79bab279"
  fetch(`${URL_BASE}/character/${id}?key=${KEY}`

  )

} 
export default function App() {
  
  const [characters, setCharacters] = useState([])

  return (
    <div>
      <Cards characters={characters} />
      <Nav />
    </div>
  )
}


