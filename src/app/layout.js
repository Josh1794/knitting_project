import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Knitting Project',
  description: 'Knitting Stitch Counter for Liz',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <h1 style={{ padding: '10px', position: 'absolute' }}>
          Knitting Row Counter
        </h1>
        {children}
      </body>
    </html>
  );
}
