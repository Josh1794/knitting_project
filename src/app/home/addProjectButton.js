'use client';
import styles from './home.module.css';
import Link from 'next/link';

export default function AddButton() {
  return (
    <Link href='/?show=true'>
      <button className={styles.addButton}>Add</button>
    </Link>
  );
}
