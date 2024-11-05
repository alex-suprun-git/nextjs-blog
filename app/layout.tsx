import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={'min-h-dvh text-stone-300'}>
        {children}
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-NRTZ9M3L" />
      </body>
    </html>
  );
}
