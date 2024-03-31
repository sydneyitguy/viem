import { defineChain } from "../../utils/chain/defineChain.js";

export const degen = /*#__PURE__*/ defineChain({
  id: 666666666,
  name: "Degen",
  network: "degen",
  nativeCurrency: {
    name: "Degen",
    symbol: "DEGEN",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.degen.tips"],
    },
    default: {
      http: ["https://rpc.degen.tips"],
    },
  },
  blockExplorers: {
    default: {
      name: "Degen Chain Explorer",
      url: "https://explorer.degen.tips",
    },
  },
  testnet: false,
});
