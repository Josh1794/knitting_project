'use client';
import { addRowCount, minusRowCount } from './actions';
import styles from './project.module.css';

export default function RowCount({ data }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={() => minusRowCount(data)}
        className={styles.projectRowButtons}
      >
        <h1>-</h1>
      </button>
      <h1 style={{ textAlign: 'center', padding: '10px', fontSize: '60px' }}>
        {data[0].rowsCompleted}
      </h1>
      <button
        onClick={() => addRowCount(data)}
        className={styles.projectRowButtons}
      >
        <h1>+</h1>
      </button>
    </div>
  );
}
