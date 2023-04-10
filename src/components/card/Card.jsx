import React from 'react';
import styles from './Card.module.css'

//--------------------------------------------

function Card({ id, name, species, gender, image, onClose }) {
 return (
  <div className={styles.container}>
   <button onClick={() => onClose(id)}>X</button>
   <h2>ID: {id}</h2>
   <h2>Name: {name}</h2>
   <h2>Species: {species}</h2>
   <h2>Gender: {gender}</h2>
   <img src={image} alt="" />
  </div>
 );
}


export default Card