import Link from "next/link";
import { useRouter } from "next/router";
import React, { FormEvent, useRef } from "react";

const Header = () => {
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
    <header className="w-full px-10 py-5 shadow-gray-900 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl space-x-11 text-white mx-auto">
        <Link href="/" className="font-semibold text-2xl tracking-widest">
          Assets
        </Link>

        <ul className="hidden flex-1 justify-center items-center space-x-7 md:flex">
          <li>
            <Link
              href="/"
              className={`px-2 py-1 rounded ${
                router.pathname === "/" ? "font-medium bg-gray-600" : ""
              }`}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link href="" className={`px-2 py-1 rounded`}>
              Discover
            </Link>
          </li>
          <li>
            <Link href="#" className={`px-2 py-1 rounded`}>
              Features
            </Link>
          </li>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center space-x-2 border border-gray-500 bg-transparent px-3 rounded-2xl"
        >
          <input
            type="text"
            ref={walletAddressRef}
            id="wallet-address"
            placeholder="Enter wallet address"
            className="border-none bg-transparent py-1 min-w-[120px] placeholder:text-gray-700 outline-none focus:cursor-text"
          />
          <button type="submit">Get Assets</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
