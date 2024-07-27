import type { NextPage } from "next";
import { MetisLogo } from "~~/components/assets/MetisLogo";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center flex-col flex-grow pt-10">
      <div className="px-5 w-[90%] md:w-[75%]">
        <h1 className="text-center mb-6 text-accent">
          <span className="block text-2xl mb-2">NFT Basico usando Metis</span>
          <span className="block text-4xl font-bold">Ejemplo Basico de la creacion de NFTs</span>
        </h1>
        <div className="flex flex-col items-center justify-center text-accent">
          <MetisLogo className="w-[240px]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
