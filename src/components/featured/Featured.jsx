import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Escritores</b> Escribenos de nuestro Sopetrán.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>¡Sopetran te invita a ser parte de nuestra comunidad de escritores! .</h1>
          <p className={styles.postDesc}>
          
          Queremos conocer y compartir tus historias sobre la vibrante cultura local, 
          los sabores de la gastronomía, los lugares secretos que debemos visitar, los logros deportivos,
           las inspiradoras historias de emprendimiento y todo lo que hace que nuestro pueblo sea especial. 
           Tu voz es importante para capturar la esencia de Sopetran y enriquecer nuestra comunidad con tus relatos.
            ¡Anímate a escribir y compartir tu pasión por nuestra hermosa tierra! con mas sentimiento
          </p>
          <button className={styles.button}>Leer Mas</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
