import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import Header from "@/src/components/header";
import Image from "next/image";
import Modal from "@/src/components/wallet/modal";

interface NFTS {
  id: number | string;
  name: string;
  description: string;
  image_url: string;
  permalink: string;
}

const Wallet = () => {
  const router = useRouter();
  const [nfts, setNfts] = useState<NFTS[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalElts, setModalElts] = useState({
    name: "",
    description: "",
    image_url: "",
    permalink: "",
  });

  // 0xDC58C548926661b6Eca25b180C1518EB2463ff5B
  const { wallet } = router.query;

  useEffect(() => {
    const getNfts = async () => {
      try {
        const response = await axios.get(
          `https://api.opensea.io/api/v1/assets?owner=${wallet}`
        );
        const assets = await response.data.assets;
        setNfts(assets);

        // console.log(assets);
        // console.log(assets[0])
      } catch (error) {
        console.error(error);
      }
    };

    getNfts();
  }, [wallet]);

  const openModal = (id: number | string) => {
    let idNum = Number(id)

    // console.log(idNum)
    if (idNum) {
      const [selectedNft] = nfts.filter(nft => nft.id === idNum)
      setShowModal(true);

      setModalElts({
        name: selectedNft.name,
        description: selectedNft.description,
        image_url: selectedNft.image_url,
        permalink: selectedNft.permalink,
      });
    }
    return;
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NFT Assets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full">
        <Header />
        <div className="w-full max-w-[1600px]  flex flex-col justify-center items-center p-20">
          <h4 className="text-white">Assets for {wallet}</h4>

          <div className="grid grid-flow-row grid-cols-complex gap-6 px-10 py-12 w-full mx-auto self-center">
            {nfts?.map(({ id, image_url, name, description, permalink }) => (
              <div
                key={id}
                className="w-[290px] flex flex-col mx-auto justify-between items-center px-3 py-4 border rounded-lg border-gray-800 hover:shadow-md hover:shadow-gray-600 hover:cursor-pointer h-fit"
              >
                <Image
                  src={image_url}
                  alt={name}
                  width={250}
                  height={250}
                  className="block rounded"
                />

                <div className="text-white mt-6 text-center">
                  <h3 className="font-medium mb-2">{name}</h3>
                  <button
                    onClick={() => openModal(id)}
                    className="bg-orange-600 px-4 py-2 rounded-md hover:opacity-80"
                  >
                    Read More {`>>`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)} modalProps={modalElts} />
      </main>
    </>
  );
};

export default Wallet;
