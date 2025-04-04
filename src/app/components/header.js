"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Quintessential } from "next/font/google";
import localFont from "next/font/local";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const quintessential = Quintessential({
  weight: "400",
  subsets: ["latin"],
});

const mocholate = localFont({
  src: "../font/Micholate.otf",
});



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <Navbar />
    // <header className="sticky top-0">
    //   <div className="flex items-center py-4 md:justify-normal justify-between">
    //     <Image
    //       className="dark:invert"
    //       src="/logo.png"
    //       alt="Next.js logo"
    //       width={100}
    //       height={38}
    //       priority
    //     />

    //     <h2
    //       className={`${quintessential.className} text-8xl mx-auto hidden sm:block`}
    //     >
    //       God bless you
    //     </h2>

    //     <div className="p-4 self-start block sm:hidden">
    //       <IcSharpMenu className="" onClick={() => setIsOpen(true)} />
    //     </div>
    //   </div>
    //   <nav className="border-b border-white hidden sm:block ">
    //     <ul className="flex justify-around text-3xl">
    //       <li>
    //         <a href="#" className=" hover:underline">
    //           Accueil
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#who" className=" hover:underline">
    //           Qui sommes-nous
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#chant" className=" hover:underline">
    //           Bibliothéque
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#formules" className=" hover:underline">
    //           Formules
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className=" hover:underline">
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   <nav
    //     className={` ${
    //       isOpen ? "translate-x-0" : "translate-x-full"
    //     }  fixed top-0 bg-primary duration-700 transform transition-transform h-screen w-screen block md:hidden`}
    //   >
    //     <CrossOutline
    //       className="align-left absolute right-1 top-4"
    //       onClick={() => setIsOpen(false)}
    //     />

    //     <ul className="flex flex-col h-full items-center text-3xl">
    //       <li className="mt-32">
    //         <a
    //           href="#"
    //           onClick={() => setIsOpen(false)}
    //           className=" hover:underline"
    //         >
    //           Accueil
    //         </a>
    //       </li>
    //       <li className="pt-8">
    //         <a
    //           href="#who"
    //           onClick={() => setIsOpen(false)}
    //           className=" hover:underline"
    //         >
    //           Qui sommes-nous
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/chant"
    //           onClick={() => setIsOpen(false)}
    //           className=" hover:underline"
    //         >
    //           Bibliothéque
    //         </a>
    //       </li>
    //       <li className="pt-8">
    //         <a
    //           href="#formules"
    //           onClick={() => setIsOpen(false)}
    //           className=" hover:underline"
    //         >
    //           Formules
    //         </a>
    //       </li>
    //       <li className="pt-7">
    //         <a
    //           href="#"
    //           onClick={() => setIsOpen(false)}
    //           className=" hover:underline"
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export function IcSharpMenu(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3 em"
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
      width="2em"
      height="2em"
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

const navLinks = [
  { title: "Accueil", url: "/" },
  { title: "Qui sommes-nous", url: "/#who" },
  { title: "Répertoire", url: "/repertoire" },
  { title: "Formules", url: "/#formules" },
  { title: "Contact", url: "/#contact" },
];

const iconList = [
  // { icon: <CrossOutline /> },
  // { icon: <CrossOutline /> },
  // { icon: <CrossOutline /> },
];

const bgColor = "bg-gray-800";
const modalColor = "bg-gray-900";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const useDesktopMediaQuery = () =>
    useMediaQuery({
      minWidth: 769,
    });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };
  return (
    <>
      {useDesktopMediaQuery() ? (
        // Laptop Navbar Code Here
        <nav
          className={`h-auto bg-secondary sticky top-0 z-20`}
        >
          <div className="flex justify-between mx-auto items-center py-0 px-24">
            <div className="text-white font-bold text-xl">
              
            <Link href="/" >
            <Image
                className="dark:invert"
                src="/logo.png"
                alt="logo"
                width={60}
                height={38}
                priority
              />
              </Link>
              
            </div>
            <ul className="flex gap-8 md:gap-16 items-center justify-center text-center cursor-pointer">
              {navLinks.map((link, index) => (
                <li key={index} className={`text-white text-2xl `}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
            <ul className="flex text-white gap-6 items-center cursor-pointer">
              {iconList.map((item, index) => (
                <div key={index}>{item.icon}</div>
              ))}
            </ul>
          </div>
        </nav>
      ) : (
        // Mobile Navbar Code Here
        <nav
          className={`h-fit w-screen bg-secondary border-white sticky top-0 `}
        >
          <div className="mx-auto flex justify-between items-center ">
            <div className="text-white font-bold text-xl">
              <Image
                className="dark:invert"
                src="/logo.png"
                alt="Next.js logo"
                width={60}
                height={38}
                priority
              />
            </div>
            <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
              {iconList.map((item, index) => (
                <div
                  key={index}
                  onClick={
                    index === iconList.length - 1 ? handleBarsIconClick : null
                  }
                >
                  {item.icon}
                </div>
              ))}
              <IcSharpMenu
                onClick={handleBarsIconClick}
                className="text-white cursor-pointer"
              />
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center ">
              <div className={`absolute inset-0 bg-secondary`} />
              <CrossOutline
                className="absolute top-6 right-4 text-white cursor-pointer"
                onClick={toggleModal}
              />
              <div className="relative  w-full">
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                  {navLinks.map((link, index) => (
                    <span
                      key={index}
                      className="text-white font-light text-2xl cursor-pointer"
                    >
                      {link.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};
