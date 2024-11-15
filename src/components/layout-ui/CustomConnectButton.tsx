import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export function CustomConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted && account && chain;
        console.log(account);
        return (
          <div
            className=""
            aria-hidden={!mounted ? true : undefined}
            style={
              !mounted
                ? { opacity: 0, pointerEvents: "none", userSelect: "none" }
                : {}
            }
          >
            {(() => {
              if (!ready) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-primary-1  text-current-100 font-bold py-2 px-4 rounded-xl"
                  >
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                  >
                    {chain.name}
                  </button>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
