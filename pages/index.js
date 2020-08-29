import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [triplet, setTriplet] = useState(null);
  const [step, setStep] = useState('first');

  useEffect(() => {
    if (router.query) {
      const query = Object.values(router.query);
      if (query.length === 0) {
        setError('No query parameter specified');
      } else if (query.length > 3) {
        setError('More than 3 parameters specified');
      } else {
        if (!query[0] || !query[1] || !query[2] || query[0] === '0' || query[1] === '0' || query[2] === '0') {
          setError('Empty or zero value not allowed');
        } else {
          const num2 = Number(query[1]);
          const num3 = Number(query[2]);
          const num1 = Number(query[0]);
          if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            setError('Only numbers allowed');
          } else if ((num1 === num2) === num3) {
            setError('Not pythagoras triplet');
          } else {
            if (num1 ** 2 + num2 ** 2 === num3 ** 2) {
              setTriplet([num1, num2, num3]);
              setError(false);
            } else if (num2 ** 2 + num3 ** 2 === num1 ** 2) {
              setTriplet([num2, num3, num1]);
              setError(false);
            } else if (num3 ** 2 + num1 ** 2 === num2 ** 2) {
              setTriplet([num3, num1, num2]);
              setError(false);
            } else {
              setError('Not pythagoras triplet');
            }
          }
        }
      }
    }
  }, [router.query]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Cerebry - Pythagoras Theorem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Cerebry -{' '}
          <a
            href="#"
            title="It states that the area of the square whose side is the hypotenuse is equal to the sum of the areas of the squares on the other two sides.">
            Pythagoras Theorem
          </a>
        </h1>

        <p className={styles.description}>
          In short
          <code className={styles.code}>a^2 + b^2 = c^2</code>
        </p>

        {!error && triplet && (
          <div className={`${styles.grid} ${styles.parent}`}>
            {step === 'first' && <FirstStep triplet={triplet} />}
            {step === 'second' && <SecondStep triplet={triplet} />}
            {step === 'third' && <ThirdStep triplet={triplet} />}
          </div>
        )}
        {error && (
          <>
            <h3>Oops ! {error} </h3>
            <img src="/pose_11-p-500.png" alt="Cerebry-tutor" className={styles.tutor} />
            <h3>Click any one below to learn </h3>
            <span>&darr;</span>
          </>
        )}
      </main>
      {!error && triplet && (
        <div className={`${styles.grid} ${styles.four}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (step === 'first') {
                setStep('second');
              } else if (step === 'second') {
                setStep('third');
              } else if (step === 'third') {
                setStep('first');
              }
            }}
            className={`${styles.card} ${styles.button}`}>
            {step === 'third' ? 'Restart?' : 'Next'}
          </a>
        </div>
      )}
      <footer className={styles.footer}>
        <a href="/?a=3&b=4&c=5" className={styles.card}>
          a=3 b=4 c=5
        </a>
        <a href="/?a=5&b=12&c=13" className={styles.card}>
          a=5 b=12 c=13
        </a>
      </footer>
    </div>
  );
}
