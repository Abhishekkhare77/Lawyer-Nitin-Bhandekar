"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, imageSrc }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(true);
  };

  const handleDisplayLeave = () => {
    setDisplay(false);
  };

  return (
    <div className="relative">
      <Image alt="imageSrc" src={imageSrc} height={760} width={760} className="absolute -z-10 w-full h-full rounded-xl" />

      <Link
        href="#"
        className="block max-w-sm p-6 h-48 w-56 md:h-72 md:w-96 bg-gray-900/40 rounded-lg shadow relative"
        onMouseEnter={handleDisplay}
        onMouseLeave={handleDisplayLeave}
      >
        <div className={`absolute p-4 inset-0 ${display ? "bg-black/60 backdrop:blur-sm" : "hidden"}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{title}</h5>
          <p className="font-normal text-gray-400">{description}</p>
        </div>

        <div
          className={`absolute inset-0 flex items-center p-10 justify-center w-full h-full ${display ? "hidden" : "flex"}`}
        >
          <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-white">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Card;
