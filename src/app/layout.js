import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'PuddingHolic - Lembut di Mulut, Nyaman di Perut',
  description: 'Sensasi Kelembutan Setingkat Awan Premium Homemade Pudding',
  icons: {
    icon: '/icon.png', // Memaksa browser membaca icon.png publik
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} bg-slate-50 text-slate-800 antialiased selection:bg-sky-200`}>
        {children}
      </body>
    </html>
  );
}