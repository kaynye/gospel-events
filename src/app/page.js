import Image from "next/image";
import Header from "./components/header";
import Princing from "./components/Pricing";

export const metadata = {
  title: "Gospel Events",
  description: "Groupe de musique pour evenement",
};

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <div className="md:flex px-8 my-10 ">
          <div className="flex-[3] flex justify-center flex-col ">
            <h3 className="text-5xl">Gospels Event</h3>
            <p className="">
              Le groupe gospel spécialisé dans l'animation d'événements
            </p>
          </div>
          <div className="flex-[5]">
            <Image
              src="/music.png"
              alt="Musique player"
              className="rounded-xl"
              width={800}
              height={100}
              priority
            />
          </div>
        </div>
        {/* Qui somme nous */}
        <div className="md:flex justify-around flex-row-reverse px-8 bg-darkBlue py-4">
          <div className="flex-[1] self-center ">
            <h3 className="text-5xl" id="who">
              Qui sommes nous ?
            </h3>
            <p className="mt-4">
              Gospel Events God Bless You est une SAS gérée par Joëlle GENEVIEVE
              & Stéphanie NZIENGUE. Cette entreprise souhaite partager le cœur
              de l’évangile au travers de la musique. <br />
              Plus qu’un style musical, le gospel est un style de vie. Il
              transmet la joie, l’espérance et l’amour. Il réjouit, émeut et
              transcende. <br />
              Ensemble, grâce aux choix musicaux, et aux artistes authentiques
              et talentueux, nous créons des temps uniques et suspendus qui
              resteront gravés dans vos mémoires. <br />
              Vous souhaitez une chanson qui raconte votre histoire, composées
              rien que pour vous, C’est possible aussi.
              <br />
              <br />
              N’hésitez plus! Contactez-nous!
              <br />
              Musicalement <br />
              Joëlle & Stéphanie
            </p>
          </div>

          <div className="flex-[1] mt-4">
            <Image
              src="/group.jpg"
              alt="Musique band"
              width={300}
              className="rounded-xl m-auto"
              height={100}
              priority
            />
          </div>
        </div>

        {/* Formules */}
        <Princing />
      </main>
      <footer className=""></footer>
    </div>
  );
}
