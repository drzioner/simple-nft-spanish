import * as chains from "viem/chains";
import { metisSepolia } from "~~/metis-sepolia-chain-config";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const scaffoldConfig = {
  /**
   * Las redes en las que tu dApp está activa
   * En este caso solo usamos la red de Metis Sepolia.
   */
  targetNetworks: [metisSepolia],

  // El intervalo en el que tu front-end consulta los servidores RPC para obtener nuevos datos
  // no tiene efecto si solo apuntas a la red local (el valor predeterminado es 4000)
  pollingInterval: 30000,

  // Esta es nuestra clave API predeterminada de Alchemy.
  // Puedes obtener la tuya en https://dashboard.alchemyapi.io
  // Se recomienda almacenarla en una variable de entorno:
  // .env.local para pruebas locales, y en la configuración de entorno del sistema/Vercel para aplicaciones en vivo.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // Este es nuestro ID de proyecto predeterminado de WalletConnect.
  // Puedes obtener el tuyo en https://cloud.walletconnect.com
  // Se recomienda almacenarlo en una variable de entorno:
  // .env.local para pruebas locales, y en la configuración de entorno del sistema/Vercel para aplicaciones en vivo.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Solo mostrar la Burner Wallet cuando se ejecuta en la red hardhat
  onlyLocalBurnerWallet: true,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
