import Image from "next/image";
import Header from "./components/header";
import Princing from "./components/Pricing";
import { Hero } from "./components/hero";
import AboutPage from "./components/About";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";

export const metadata = {
  title: "Gospel Events God Bless You",
  description: "ospel Events God Bless You, le groupe gospel spécialisé dans l'animation d'événements en région Centre-Val de Loire. Mariages, baptêmes, concerts, événements d'entreprise",
  lang: "fr",
  keywords: "gospel, événements, mariage, baptême, concert, groupe musical, région centre, orleans, blois, joelle genevieve, stephanie nziengue",
  authors: [{ name: "Gospel Events God Bless You" }],
  creator: "Gospel Events God Bless You",
  publisher: "Gospel Events God Bless You",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Gospel Events God Bless You - Groupe Gospel pour vos événements",
    description: "Le groupe gospel spécialisé dans l'animation d'événements. Nous partageons la joie, l'espérance et l'amour à travers la musique.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gospel Events God Bless You",
    description: "Le groupe gospel spécialisé dans l'animation d'événements",
  },

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
