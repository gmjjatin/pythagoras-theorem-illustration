import React from 'react';
import styles from '../styles/Home.module.scss';

export default function First({ triplet }) {
  return (
    <>
      <div className={`${styles.grid}`}>
        <h5>{triplet[0]} dots</h5>
        {[...Array(triplet[0])].map((v, i) => (
          <a key={i} href="#" className={`${styles.card} ${styles.black}`}></a>
        ))}
      </div>
      <div className={`${styles.grid} ${styles.two}`}>
        <h5>{triplet[1]} dots</h5>
        {[...Array(triplet[1])].map((v, i) => (
          <a key={i} href="#" className={`${styles.card} ${styles.blue}`}></a>
        ))}
      </div>
      <div className={`${styles.grid} ${styles.three}`}>
        <h5>{triplet[2]} dots</h5>
        {[...Array(triplet[2])].map((v, i) => (
          <a key={i} href="#" className={`${styles.card} ${styles.grey}`}></a>
        ))}
      </div>
    </>
  );
}
