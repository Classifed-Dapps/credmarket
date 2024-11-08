"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  Chain,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";

const queryClient = new QueryClient();

const mande = {
  id: 18071918,
  name: "Mande",
  nativeCurrency: { name: "Mande", symbol: "MANDE", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://mande-mainnet.public.blastapi.io"] },
  },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: "credlist",
  projectId: "dd57419b0220544787a9ddc9918038be",
  chains: [mande],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function App({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="compact" initialChain={mande}>
          {children}
          <ToastContainer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
