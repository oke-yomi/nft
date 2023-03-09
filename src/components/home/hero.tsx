import React, { FormEvent, useRef } from "react";
import { FiDribbble } from "react-icons/fi";
import {
  SiHiveBlockchain,
  SiBlockchaindotcom,
  SiPrisma,
  SiPaypal,
} from "react-icons/si";
import { FaYoutube, FaGoogle } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { TbNorthStar } from "react-icons/tb";
import { useRouter } from "next/router";

const Hero = () => {
  const walletAddressRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (walletAddressRef.current) {
      const walletAddress = walletAddressRef.current.value;

      if (walletAddress === "") return;

      // console.log(walletAddress);

      walletAddressRef.current.value = "";

      router.push(`/nfts/${walletAddress}`);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center p-20 relative bg-gradient-to-tr from-blue-900 via-pink-900 to-orange-900 h-full">
      <p className="capitalize font-semibold text-5xl md:text-8xl mb-5 text-center">
        discover rare collections of Arts & NFTs{" "}
        <TbNorthStar className="text-base" />
      </p>

      <h2 className="text-slate-300 md:text-lg text-base">
        Buy, collect and sell Best NFTs
      </h2>
      <p className="text-slate-300 text-lg">
        Enter Wallet Address to view amazing NFT assets
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center space-x-2 border border-gray-300 bg-transparent px-3 rounded-2xl mt-6"
      >
        <input
          type="text"
          ref={walletAddressRef}
          id="wallet-address"
          placeholder="Enter wallet address"
          className="border-none bg-transparent py-1 min-w-[120px] placeholder:text-gray-400 outline-none focus:cursor-text"
        />
        <button type="submit">Enter ↗️</button>
      </form>

      <ul className="flex space-x-4 mt-20 justify-between items-center w-full">
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <FiDribbble className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <SiBlockchaindotcom className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <FaYoutube className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <SiPrisma className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <AiFillThunderbolt className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <FaGoogle className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <SiHiveBlockchain className="text-3xl text-gray-400" />
        </li>
        <li className="p-4 hover:border border-pink-800 rounded-sm">
          <SiPaypal className="text-3xl text-gray-400" />
        </li>
      </ul>

      <TbNorthStar className="text-base" />
      <TbNorthStar className="text-base absolute left-2" />
      <TbNorthStar className="text-base absolute right-2" />
      <TbNorthStar className="text-base absolute top-5" />
      <TbNorthStar className="text-base absolute left-7 top-11" />
      <TbNorthStar className="text-base absolute right-2 bottom-1" />
      <TbNorthStar className="text-base absolute right-6 top-1" />
      <TbNorthStar className="text-base absolute left-36" />
      <TbNorthStar className="text-base absolute bottom-2" />
    </div>
  );
};

export default Hero;
