'use client';

import Link from 'next/link';

export default function AddButton() {
  return (
    <Link href='/?show=true'>
      <button
        style={{
          height: '30px',
          width: '70px',
          color: 'black',
          backgroundColor: 'whitesmoke',
          borderRadius: '4px',
        }}
      >
        Add
      </button>
    </Link>
  );
}
