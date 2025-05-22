"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBasket, ArrowRight } from "lucide-react";

const Data = [
  {
    id: 1,
    image: "/2.jpg",
    title: "Build As One Team",
    description:
      "Work seamlessly across your organization on a platform designed for collaboration.",
  },
  {
    id: 2,
    image: "/1.jpg",
    title: "Transform your culture",
    description:
      "Embrace innersource, iterate faster, and ship more frequently using best tools from open source teams.",
  },
  {
    id: 3,
    image: "/3.jpg",
    title: "Learn as you build",
    description:
      "Get insight into how your team builds today with community-backed KPIs",
  },
];

export default function HeroSection() {
  const [backgroundColor, setBackgroundColor] = useState("bg-white");

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
      className={`w-full flex flex-col items-center px-4 py-12 ${backgroundColor}`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
        Turn Collaboration into Innovation
      </h2>

      <Link
        href="/"
        className="flex mb-8 text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              <p
                className={`text-xl font-semibold text-center mt-4 ${
                  isDarkBackground ? "text-white" : "text-black"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`text-sm mt-2 text-center ${
                  isDarkBackground ? "text-white/80" : "text-gray-500"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            onClick={() => handleColorChange("bg-black")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 border-black ${
              backgroundColor === "bg-black" ? "text-white" : "text-black"
            }`}
          >
            <ShoppingBasket
              className={
                backgroundColor === "bg-black" ? "text-white" : "text-black"
              }
            />
            <span>Black</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-red-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 border-black ${
              backgroundColor === "bg-red-600" ? "text-white" : "text-black"
            }`}
          >
            <ShoppingBasket className="text-black" />
            <span>Red</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-green-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2  hover:ring-blue-400 ${
              backgroundColor === "bg-green-600" ? "text-white" : "text-black"
            }`}
          >
            <ShoppingBasket className="text-black" />
            <span>Green</span>
          </button>
          <button
            onClick={() => handleColorChange("bg-blue-600")}
            className={`flex items-center gap-2 px-4 py-2 rounded border-2 h-[40px] border-black hover:ring-blue-400 ${
              backgroundColor === "bg-blue-600" ? "text-white" : "text-black"
            }`}
          >
            <ShoppingBasket className="text-black" />
            <span>Blue</span>
          </button>
        </div>
      </div>
    </div>
  );
}
