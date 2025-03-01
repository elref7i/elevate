import Footer from './_components/Footer/Footer';
import Navbar from './_components/Navbar/Navbar';
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Navbar />

        <div className="min-h-[60vh]">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
