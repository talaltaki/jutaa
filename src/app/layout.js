import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'Jutaa',
  description: 'A Shoe Brand Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="tracking-widest">{children}</main>
      </body>
    </html>
  );
}
