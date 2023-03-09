import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type ModalProps = {
  description: string;
  permalink: string;
  name: string;
  image_url: string;
};

type Props = {
  isVisible: boolean;
  onClose: any;
  modalProps: ModalProps;
};

const Modal = ({ isVisible, onClose, modalProps }: Props): JSX.Element => {
  const { name, permalink, description, image_url } = modalProps;
  // description, permalink, name

  if (!isVisible) return <></>;

  const handleBodyClose = (e: any) => {
    if (e.target.id === "modal-wrapper") onClose();
    return;
  };

  return (
    <div
      id="modal-wrapper"
      onClick={handleBodyClose}
      className="p-5 fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="w-full max-w-[600px] border rounded-lg bg-white py-3">
        <div className="border-b px-4 py-1 flex justify-between items-center">
          <h3 className="font-bold">{name}</h3>
          <button onClick={() => onClose()} className='font-bold text-orange-600 border border-orange-600 px-2 rounded-full'>X</button>
        </div>

        <div className="px-4 mt-4 h-fit flex space-x-3 justify-between flex-wrap">
          <Image src={image_url} width={300} height={300} alt={name} className='rounded' />
          <div className="flex-1">
            <p className="links">
              <ReactMarkdown>{description}</ReactMarkdown>
            </p>

            <div className="bg-orange-600 hover:opacity-80 px-4 py-2 rounded-md mt-5 w-fit text-white cursor-pointer">
              <Link href={permalink} className="">
                View on OpenSea
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
