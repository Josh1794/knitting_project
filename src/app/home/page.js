'use client';
import styles from '../page.module.css';
import { getProjects } from './actions';

export default function LandingPage() {
  return (
    <div className={styles.center}>
      <div
        style={{
          borderWidth: '1px',
          borderRadius: '4px',
          borderColor: 'white',
          height: '200px',
          width: '200px',
          backgroundColor: 'white',
        }}
      >
        <button
          style={{
            height: '25px',
            width: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={getProjects()}
        >
          <p>+</p>
        </button>
        <p>Signed In</p>
      </div>
    </div>
  );
}
