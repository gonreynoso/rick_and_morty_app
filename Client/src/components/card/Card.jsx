import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

//--------------------------------------------

function Card({ id, name, species, gender, image, onClose }) {
 return (
  <div className={styles.container}>
   <button onClick={() => onClose(id)}>X</button>
   <h2>ID: {id}</h2>
   <Link to={`/detail/${id}`}>
    <h2>Name: {name}</h2>
   </Link>
   <h2>Species: {species}</h2>
   <h2>Gender: {gender}</h2>
   <img src={image} alt="" />
  </div>
 );
}


export default Card