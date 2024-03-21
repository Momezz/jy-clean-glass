import '../../public/css/variables.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import { Providers } from '../redux/providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JY Clean Glass",
  description: "Shampoo limpia parabrisas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav>
            <Navigation />
          </nav>
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
