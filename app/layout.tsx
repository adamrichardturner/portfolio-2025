import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-league',
});

export const metadata: Metadata = {
  title: 'Adam Richard Turner | Software Engineer',
  description:
    'Software Engineer based in London focused on crafting high-quality Front End UI for web applications',
  metadataBase: new URL('https://adamrichardturner.dev'),
  openGraph: {
    title: 'Adam Richard Turner | Software Engineer',
    description:
      'Software Engineer based in London focused on crafting high-quality Front End UI for web applications',
    url: '/',
    siteName: 'Adam Richard Turner',
    images: [
      {
        url: 'https://adamrichardturner.dev/adam-social.png',
        width: 1200,
        height: 630,
        alt: 'Adam Richard Turner - Software Engineer',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Richard Turner | Software Engineer',
    description:
      'Software Engineer based in London focused on crafting high-quality Front End UI for web applications',
    images: [
      {
        url: 'https://adamrichardturner.dev/adam-social.png',
        alt: 'Adam Richard Turner - Software Engineer',
      },
    ],
    creator: '@devadam88',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
