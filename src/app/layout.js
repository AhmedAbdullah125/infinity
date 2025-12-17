import './globals.css';
import '@/src/style/main.css';
import '@/src/style/all.min.css';
import Header from '@/components/Header/Header';
import ClientProviders from '@/src/utils/providers/ClientProviders';
import Footer from '@/components/Footer/Footer';

export async function generateMetadata() {
  return {
    title: 'Infinity',
    description: 'Infinity',
    keywords: 'Infinity',
    openGraph: {
      title: 'Infinity',
      description: 'Infinity',
      url: 'https://infinity-rose.vercel.app',
      siteName: 'Infinity',
      images: [
        {
          url: 'https://infinity-rose.vercel.app/_next/static/media/blue-logo.bf.svg',
          width: 1200,
          height: 630,
          alt: 'Infinity',
        },
      ],
      type: 'website',
      locale: 'ar_SA',
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning={true}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
