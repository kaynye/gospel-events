import Link from "next/link";
import { ArrowLeft, Music } from "lucide-react";
import Header from "../components/header";
import { Footer } from "../components/Footer";

// Group songs into categories
const categories = {
  "Baptême": [
    "La bénédiction",
    "La lumière du monde de Jessy Palma",
    "Je te donne mon cœur",
    "God with us",
  ],
  "Obsèque": [
    "Amazing grace" ,
    "La source de Jessy Elsa P.",
    "His eyes is on the sparrow" ,
    "I dont’ feel no ways de Mary Mary",
    "Stand by me",
    "How great is our god" ,
    "Total Praise" ,

  ],
  "Cérémonie & Cocktails": [
    "Tous les chants"
  ]
};

export default function RepertoirePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-primary/30">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-8 flex items-center">
            <Link href="/">
              <button variant="outline" className="flex items-center gap-2 bg-white hover:bg-white/90  px-4 rounded-full">
                <ArrowLeft className="h-4 w-4" />
                Retour à l'accueil
              </button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-darkBlue mb-6">Notre Répertoire</h1>

            <p className="text-lg text-gray-700 mb-8">
              Découvrez notre répertoire varié qui s'adapte à toutes les occasions. Nous pouvons également
              adapter notre répertoire selon vos envies ou composer un morceau spécialement pour votre événement.
            </p>

            <div className="grid gap-8 mb-12">
              {Object.entries(categories).map(([category, songList]) => (
                <div key={category} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="h-6 w-6 text-secondary" />
                    <h2 className="text-2xl font-semibold text-darkBlue">{category}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {songList.map((song) => (
                      <div key={song} className=" bg-primary/10 rounded-md hover:bg-primary/20 transition-colors">
                        {song}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 mb-8">
              <h3 className="text-xl font-semibold text-darkBlue mb-3">Vous ne trouvez pas votre chanson préférée ?</h3>
              <p className="text-gray-700 mb-4">
                Ce répertoire n'est pas exhaustif et nous sommes constamment en train de l'enrichir.
                N'hésitez pas à nous demander si nous connaissons une chanson en particulier.
              </p>
              <Link href="/#contact">
                <button className="bg-secondary text-white hover:bg-secondary/90 px-4 rounded-full">
                  Nous contacter pour une demande spéciale
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
