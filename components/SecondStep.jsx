import React from 'react';
import styles from '../styles/Home.module.scss';

export default function Second({ triplet }) {
  return (
    <>
      <div className={`${styles.grid} ${styles.flexColumn}`}>
        <h5>
          {triplet[0]}x{triplet[0]} = {triplet[0] ** 2}
        </h5>
        {[...Array(triplet[0])].map((v, j) => (
          <div className={`${styles.grid}`}>
            {[...Array(triplet[0])].map((v, i) => (
              <a
                key={i}
                href="#"
                className={`${styles.card} ${styles.black} ${j === 0 ? '' : i === 0 ? styles.two : styles.three}`}></a>
            ))}
          </div>
        ))}
      </div>
      <div className={`${styles.grid} ${styles.flexColumn}`}>
        <h5>
          {triplet[1]}x{triplet[1]} = {triplet[1] ** 2}
        </h5>
        {[...Array(triplet[1])].map((v, j) => (
          <div className={`${styles.grid} `}>
            {[...Array(triplet[1])].map((v, i) => (
              <a
                key={i}
                href="#"
                className={`${styles.card} ${styles.blue} ${j === 0 ? '' : i === 0 ? styles.two : styles.three}`}></a>
            ))}
          </div>
        ))}
      </div>
      <div className={`${styles.grid} ${styles.flexColumn}`}>
        <h5>
          {triplet[2]}x{triplet[2]} = {triplet[2] ** 2}
        </h5>
        {[...Array(triplet[2])].map((v, j) => (
          <div className={`${styles.grid} `}>
            {[...Array(triplet[2])].map((v, i) => (
              <a
                key={i}
                href="#"
                className={`${styles.card} ${styles.grey} ${j === 0 ? '' : i === 0 ? styles.two : styles.three}`}></a>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
