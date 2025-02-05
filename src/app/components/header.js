"use client";

import Image from "next/image";
import { useState } from "react";

import { Quintessential } from "next/font/google";

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center py-4 md:justify-normal justify-between">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={100}
          height={38}
          priority
        />

        <h2
          className={`${quintessential.className} text-8xl mx-auto hidden sm:block`}
        >
          God bless you
        </h2>

        <div className="p-4 self-start block sm:hidden">
          <IcSharpMenu className="" onClick={() => setIsOpen(true)} />
        </div>
      </div>
      <nav className="border border-white hidden sm:block">
        <ul className="flex justify-around text-3xl">
          <li>
            <a href="#" className=" hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="#who" className=" hover:underline">
              Qui nous sommes
            </a>
          </li>
          <li>
            <a href="#chant" className=" hover:underline">
              Base de chants
            </a>
          </li>
          <li>
            <a href="#formules" className=" hover:underline">
              Formules
            </a>
          </li>
          <li>
            <a href="#" className=" hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className={` ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }  fixed top-0 bg-primary duration-700 transform transition-transform h-screen w-screen block md:hidden`}
      >
        <CrossOutline
          className="align-left absolute right-1 top-4"
          onClick={() => setIsOpen(false)}
        />

        <ul className="flex flex-col h-full items-center text-3xl">
          <li className="mt-32">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className=" hover:underline"
            >
              Accueil
            </a>
          </li>
          <li className="pt-8">
            <a
              href="#who"
              onClick={() => setIsOpen(false)}
              className=" hover:underline"
            >
              Qui nous sommes
            </a>
          </li>
          <li>
            <a
              href="/chant"
              onClick={() => setIsOpen(false)}
              className=" hover:underline"
            >
              Base de chants
            </a>
          </li>
          <li className="pt-8">
            <a
              href="#formules"
              onClick={() => setIsOpen(false)}
              className=" hover:underline"
            >
              Formules
            </a>
          </li>
          <li className="pt-7">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className=" hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function IcSharpMenu(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4em"
      height="4em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
      ></path>
    </svg>
  );
}

export function CrossOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5em"
      height="5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        d="m6 6l12 12m0-12L6 18"
      ></path>
    </svg>
  );
}
