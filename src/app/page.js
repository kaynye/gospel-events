import Image from "next/image";
import Header from "./components/header";
import Princing from "./components/Pricing";
import { Hero } from "./components/hero";
import AboutPage from "./components/About";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

export const metadata = {
  title: "Gospel Events",
  description: "Groupe de musique gospel pour evenement en region centre (Orleans, Blois)",
  lang: "fr"
};


export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero/>
        {/* Qui somme nous */}
        <AboutPage/>
        {/* Formule/s */}
        <Princing />
        <ContactForm/>
      </main>
      <Footer/>
    </div>
  );
}
