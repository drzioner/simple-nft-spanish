import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-verify";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

// Si no se configura, utiliza nuestra clave API predeterminada de Alchemy.
// Visita https://dashboard.alchemyapi.io para obtener tu propia clave.
const providerApiKey = process.env.ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";
// Si no se configura, utiliza la clave privada de la cuenta hardhat 0.
const deployerPrivateKey =
  process.env.DEPLOYER_PRIVATE_KEY ?? "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
// Si no se configura, utiliza nuestra clave API predeterminada de Etherscan.
const etherscanApiKey = process.env.ETHERSCAN_API_KEY || "DNXJA8RX2Q3VZ4URQIWP7Z68CJXQZSC6AW";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17", // Versión de Solidity
    settings: {
      optimizer: {
        enabled: true, // Habilita el optimizador
        // Visita https://docs.soliditylang.org/en/latest/using-the-compiler.html#optimizer-options para más información
        runs: 200, // Número de ejecuciones del optimizador
      },
    },
  },
  defaultNetwork: "metisSepolia", // Red por defecto
  namedAccounts: {
    deployer: {
      // Por defecto, tomará la primera cuenta de Hardhat como el desplegador
      default: 0,
    },
  },
  // Redes preconfiguradas del proyecto.
  // Si la red que buscas no está aquí, puedes agregar nuevas configuraciones de red
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`, // URL para forking de la red principal de Ethereum
        enabled: process.env.MAINNET_FORKING_ENABLED === "true", // Habilita el forking si la variable de entorno está configurada
      },
    },
    // Configuración de la red Andromeda que e3s la Red Principal de Metis
    andromeda: {
      url: "https://andromeda.metis.io/?owner=1088", // URL de la red Andromeda
      accounts: [deployerPrivateKey],
      verify: {
        etherscan: {
          apiKey: etherscanApiKey,
          apiUrl: "https://api.routescan.io/v2/network/mainnet/evm/1088/etherscan",
        },
      },
    },
    // Configuración de la red MetisSepolia que es la Red de Pruebas de Metis
    metisSepolia: {
      url: "https://sepolia.metisdevops.link/",
      accounts: [deployerPrivateKey],
      verify: {
        etherscan: {
          apiKey: etherscanApiKey,
          apiUrl: "https://sepolia.explorer.metisdevops.link",
        },
      },
    },
  },
  // Configuración para el plugin hardhat-verify
  etherscan: {
    apiKey: `${etherscanApiKey}`, // Clave API de Etherscan
  },
  // Configuración para etherscan-verify del plugin hardhat-deploy
  verify: {
    etherscan: {
      apiKey: `${etherscanApiKey}`, // Clave API de Etherscan
    },
  },
  sourcify: {
    enabled: false, // Deshabilita Sourcify
  },
};

export default config; // Exporta la configuración de Hardhat