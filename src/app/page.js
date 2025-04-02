import Image from "next/image";
import Header from "./components/header";
import Princing from "./components/Pricing";
import { Clicker_Script } from "next/font/google";

export const metadata = {
  title: "Gospel Events",
  description: "Groupe de musique pour evenement",
};

const clicker_script = Clicker_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <div className="md:flex px-8 my-10 ">
          <div className="flex-[4] flex justify-center flex-col ">
            <h3 className="text-5xl mb-4">Gospels Event</h3>
            <p className="">
              Le groupe gospel spécialisé dans l'animation d'événements
            </p>
            <button className="bg-primary text-darkBlue px-8 md:py-4 md:ml-auto self-left border border-darkBlue rounded-full hover:bg-darkBlue hover:text-white duration-500 my-4 md:mr-12">
                Nous contacter
              </button>
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
        <video controls={false} preload="none" autoPlay loop muted className="w-full  hidden md:block">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="w-full ">

        </div>
        {/* Qui somme nous */}
        <div className="md:flex justify-around flex-row-reverse px-8 bg-primary py-8">
          <div className="flex-[1] self-center ">
            <h3 className="text-5xl" id="who">
              Qui sommes nous ?
            </h3>
            <p className="mt-4 text-base md:text-xl">
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
            </p>

            <div className="flex justify-between mt-8">
              <div className=" flex flex-col justify-between">
                <span className={`${clicker_script.className} text-3xl md:text-5xl mb-4`}>
                  Musicalement,
                </span>
                <span className={`${clicker_script.className} text-3xl md:text-5xl`}>
                  Joëlle & Stéphanie
                </span>
              </div>
              <button className="bg-primary text-secondary px-8 md:py-4 h-fit self-center border border-secondary rounded-full hover:bg-secondary hover:text-white duration-500">
                Nous contacter
              </button>
            </div>
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
