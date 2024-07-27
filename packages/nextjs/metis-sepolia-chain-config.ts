import { defineChain } from "viem";

/**
 * Configuración de la red de Metis Sepolia
 */
export const metisSepolia = defineChain({
  id: 59902, // ID de la cadena
  name: "metisSepolia", // Nombre de la cadena
  nativeCurrency: { name: "tMetis", symbol: "tMETIS", decimals: 18 }, // Moneda nativa de la cadena
  rpcUrls: {
    default: {
      http: ["https://sepolia.metisdevops.link"], // URL del servidor RPC
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan", // Nombre del explorador de bloques
      url: "https://sepolia-explorer-api.metisdevops.link", // URL del explorador de bloques
      apiUrl: "https://sepolia-explorer-api.metisdevops.link/api", // URL de la API del explorador de bloques
    },
  },
  testnet: true, // Indica que es una red de prueba
});
