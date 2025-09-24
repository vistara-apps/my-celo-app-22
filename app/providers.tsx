'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';
import { ThemeProvider } from './components/ThemeProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <OnchainKitProvider 
      apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY || ''} 
      chain={base}
    >
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </OnchainKitProvider>
  );
}
