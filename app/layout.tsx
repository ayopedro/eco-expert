import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Provider from './provider';
import NavBar from './components/nav-bar';
import Footer from './components/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'EcoExpert Cleaning Solutions',
  description: 'Next generation cleaning solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} antialiased bg-background h-screen`}
      >
        <Provider>
          <NavBar />
          <main className='min-h-full'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
