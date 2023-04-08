import React from 'react';
import styles from './Card.module.css'

//--------------------------------------------

function Card({ name, species, gender, image, onClose }) {
 return (
  <div className={styles.container}>
   <button onClick={onClose}>X</button>
   <h2>Name: {name}</h2>
   <h2>Species: {species}</h2>
   <h2>Gender: {gender}</h2>
   <img src={image} alt="" />
  </div>
 );
}


export default Card