"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBasket, ArrowRight } from "lucide-react";
import Data from "@/app/Data/data";

export default function HeroSection() {
  const [backgroundColor, setBackgroundColor] = useState("bg-black");

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  const isDarkBackground =
    backgroundColor === "bg-black" ||
    backgroundColor === "bg-red-600" ||
    backgroundColor === "bg-green-600" ||
    backgroundColor === "bg-blue-600";

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center px-4 py-12 ${backgroundColor}`}
    >
      <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 text-center">
        Turn Collaboration into Innovation
      </h2>

      <Link
        href="/"
        className={`flex mb-8  hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          isDarkBackground ? "text-blue-900" : "text-blue"
        }`}
      >
        Learn More about Inner Resources
        <ArrowRight />
      </Link>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 rounded-lg hover:scale-105 transition-transform duration-500"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-wrap">
                <p
                  className={`text-xl font-semibold  mt-4 ${
                    isDarkBackground ? "text-white" : "text-white"
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`text-sm mt-2  ${
                    isDarkBackground ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => handleColorChange("bg-black")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 border-white hover:scale-105 transition-transform duration-500 ${
              backgroundColor === "bg-black" ? "text-white" : "text-white"
            }`}
          >
            <ShoppingBasket
              className={
                backgroundColor === "bg-black" ? "text-white" : "text-white"
              }
            />
            <span>Black</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-red-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 border-white hover:scale-105 transition-transform duration-500 ${
              backgroundColor === "bg-red-600" ? "text-white" : "text-white"
            }`}
          >
            <ShoppingBasket className="text-white" />
            <span>Red</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-green-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2  border-white hover:scale-105 transition-transform duration-500 ${
              backgroundColor === "bg-green-600" ? "text-white" : "text-white"
            }`}
          >
            <ShoppingBasket className="text-white" />
            <span>Green</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-blue-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 h-[40px] border-white hover:ring-blue-400 hover:scale-105 transition-transform duration-500 ${
              backgroundColor === "bg-blue-600" ? "text-white" : "text-white"
            }`}
          >
            <ShoppingBasket className="text-white" />
            <span>Blue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
