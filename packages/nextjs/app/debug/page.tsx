import { DebugContracts } from "./_components/DebugContracts";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Depuración de Contratos",
  description: "Debug your deployed 🏗 Scaffold-ETH 2 contracts in an easy way",
});

const Debug: NextPage = () => {
  return (
    <>
      <DebugContracts />
      <div className="text-center mt-8 bg-error text-accent-content dark:bg-info p-10">
        <h1 className="text-4xl my-0">Depuración de Contratos</h1>
        <p className="text-accent-content">
          Puede depurar e interactuar con sus contratos implementados aquí.
          <br /> Revisa{" "}
          <code className="italic bg-base-300 text-base font-bold [word-spacing:-0.5rem] px-1 text-error dark:text-accent">
            packages / nextjs / app / debug / page.tsx
          </code>{" "}
        </p>
      </div>
    </>
  );
};

export default Debug;
