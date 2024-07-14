import styles from './page.module.css';
import SignInPage from './signInPage';

export default function Home() {
  return (
    <div className={styles.main}>
      <div>
        <h1>Knitting Row Counter</h1>
      </div>
      <SignInPage />
    </div>
  );
}
