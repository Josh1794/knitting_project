import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import { logout } from './actions';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Knitting Project',
  description: 'Knitting Stitch Counter for Liz',
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50px',
            }}
          >
            <h1 style={{ padding: '10px' }}>Knitting Row Counter</h1>
            <Image src='/apple-touch-icon.png' width={40} height={40} />
          </div>
          <form>
            <button className={styles.logoutButton} formAction={logout}>
              Logout
            </button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
}
