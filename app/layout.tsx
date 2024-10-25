import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="1eec873a-07bc-44b1-95bc-9fe996710116"
          data-blockingmode="auto"
          type="text/javascript"
        ></Script>
      </head>
      <body className={'min-h-dvh text-stone-300'}>
        {children}
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-NRTZ9M3L" />
      </body>
    </html>
  );
}
