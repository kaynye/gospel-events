"use client";

import Link from "next/link";
import { List } from "lucide-react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center hero-section">
      <div className="container mx-auto px-4 py-12 hero-content">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-md">
            Rendez votre événement inoubliable
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
            Gospel Events, le groupe gospel spécialisé dans l'animation d'événements
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 align-center">
            <Link href="/#who" className="my-auto">
              <button aria-label="Who" className="bg-primary text-darkBlue px-6 py-2 text-lg w-full sm:w-auto rounded-full">
                Qui somme nous ?
              </button>
            </Link>

            <Link href="/#formules" className="my-auto">
            <button variant="outline" aria-label="formules" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-2 text-lg w-full sm:w-auto flex align-center border border-white rounded-full">
                <List className="mr-2 h-5 w-5 self-center" />
                Découvrir nos formules
              </button>
            </Link>


            {/* <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
              <DialogTrigger asChild>
                <button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-6 py-6 text-lg w-full sm:w-auto">
                  <Play className="mr-2 h-5 w-5" />
                  Voir notre vidéo
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video w-full">
                  <video
                    controls
                    className="w-full h-full"
                    autoPlay={videoOpen}
                    onEnded={() => setVideoOpen(false)}
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    <track
                      kind="captions"
                      src="/captions-fr.vtt"
                      srcLang="fr"
                      label="Français"
                      default
                    />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              </DialogContent>
            </Dialog> */}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <Link href="/#contact" className="animate-bounce">
              <button aria-label="contact" variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 rounded-full h-14 w-14 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 mx-auto"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
