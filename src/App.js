import Cards from "./components/cards/Cards.jsx"
import Nav from "./components/navbar/Nav.jsx"
import React from 'react';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import About from "./components/about/About.jsx"
import Detail from "./components/detail/Detail.jsx"


export default function App() {

  const [characters, setCharacters] = useState([])

  //fn onSearch AGREGA personajes al estado
  const onSearch = (id) => {

    const URL_BASE = "https://be-a-rym.up.railway.app/api"

    const KEY = "208915502015.5ad33e85904a79bab279"

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)

      .then((response) => response.json())
      .then((data) => {

        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('No hay personajes con ese ID');
        }
      }
      )
  }


  //fn onClose BORRA personajes del estado
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
    //el metodo filter no modifica el array original sino que
    //me devuelve un array nuevo
  }

  //renderizado
  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" 
        element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="./components/about/About.jsx" 
        element={<About />} />
        
        <Route path="./detail/:detailId" 
        element={<Detail />} />
      </Routes>

    </div>
  )
}

