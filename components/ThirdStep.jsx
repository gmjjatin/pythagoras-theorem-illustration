import React from 'react';
import styles from '../styles/Home.module.scss';
export default function Third({ triplet }) {
  let count = 0;
  return (
    <>
      <div className={`${styles.grid} ${styles.flexColumn}`} title={`${triplet[2]}x${triplet[2]} total dots`}>
        <h5>
          <span className={styles.two}>
            {triplet[0]}x{triplet[0]}
          </span>{' '}
          <span className={styles.three}>
            + {triplet[1]}x{triplet[1]}
          </span>{' '}
          <span className={styles.four}>
            = {triplet[2]}x{triplet[2]}
          </span>
        </h5>
        {[...Array(triplet[2])].map((v, j) => (
          <div className={`${styles.grid} `}>
            {[...Array(triplet[2])].map((v, i) => {
              ++count;
              return (
                <a
                  title={`${
                    i < triplet[1] && j < triplet[1]
                      ? triplet[1] + 'x' + triplet[1] + ' blue'
                      : triplet[0] + 'x' + triplet[0] + ' black'
                  } dots`}
                  key={i}
                  href="#"
                  className={`${styles.card} ${
                    i < triplet[1] && j < triplet[1] ? styles.turnBlue : styles.turnBlack
                  }`}></a>
              );
            })}
          </div>
        ))}
      </div>
      <div className={styles.triangleContainer}>
        <div className={`${styles.grid} ${styles.flexColumn}`} title={`height of triangle = ${triplet[1]} dots`}>
          {[...Array(triplet[1])].map((v, i) => (
            <a key={i} href="#" className={`${styles.card} ${styles.blue}`}></a>
          ))}
        </div>
        <div className={`${styles.grid} ${styles.base}`} title={`base of triangle = ${triplet[0]} dots`}>
          {[...Array(triplet[0])].map((v, i) => (
            <a key={i} href="#" className={`${styles.card} ${styles.black}`}></a>
          ))}
        </div>
        <div
          style={{ transform: `rotate(${-1 * Math.asin(triplet[0] / triplet[2])}rad)` }}
          className={`${styles.grid} ${styles.hypotenuse}`}
          title={`hypotenuse of triangle = ${triplet[2]} dots`}>
          {[...Array(triplet[2])].map((v, i) => (
            <a key={i} href="#" className={`${styles.card} ${styles.grey}`}></a>
          ))}
        </div>
      </div>
    </>
  );
}
