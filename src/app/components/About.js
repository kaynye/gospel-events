"use client";

import { Heart, Music, Star } from "lucide-react";
import { Clicker_Script } from "next/font/google";
import Image from "next/image";

const clicker_script = Clicker_Script({
  weight: "400",
  subsets: ["latin"],
});


const AboutPage = () => {

  
  return (
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
              transcende. <br /></p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="bg-white p-4 rounded-lg text-center shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Music className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-darkBlue">Choix Musicaux</h3>
              </div>

              <div className="bg-white p-4 rounded-lg text-center shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-darkBlue">Artistes Talentueux</h3>
              </div>

              <div className="bg-white p-4 rounded-lg text-center shadow-md">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-darkBlue">Moments Uniques</h3>
              </div>
              </div>
              <p className="mt-4 text-base md:text-xl">
              Ensemble, grâce aux choix musicaux, et aux artistes authentiques
              et talentueux, nous créons des temps uniques et suspendus qui
              resteront gravés dans vos mémoires. <br />
              Vous souhaitez une chanson qui raconte votre histoire, composées
              rien que pour vous, C’est possible aussi.
              <br />
            </p>

            <div className="flex justify-between mt-8">
              <div className=" flex flex-col justify-between">
                <span className={`${clicker_script.className} text-3xl md:text-5xl mb-4 text-secondary`}>
                  Musicalement,
                </span>
                <span className={`${clicker_script.className} text-3xl md:text-5xl text-secondary`}>
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
  );
};

export default AboutPage;