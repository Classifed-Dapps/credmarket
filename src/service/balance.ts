import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice } from "@cosmjs/stargate";

const SPICE_CONTRACT =
  "factory/osmo1n6asrjy9754q8y9jsxqf557zmsv3s3xa5m9eg5/uspice";
const OSMOSIS_RPC = "https://rpc.osmosis.zone";

async function connectSpiceToken(wallet: any) {
  const client = await SigningCosmWasmClient.connectWithSigner(
    OSMOSIS_RPC,
    wallet,
    { gasPrice: GasPrice.fromString("0.025uosmo") }
  );

  // Query token balance
  const balance = await client.queryContractSmart(SPICE_CONTRACT, {
    balance: { address: wallet.address },
  });

  return balance;
}
