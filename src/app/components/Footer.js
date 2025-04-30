import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-darkBlue text-white" id="contact">
      <div className="container mx-auto px-4 py-12 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-primary.png"
                alt="Gospel Events God bless you Logo"
                width={60}
                height={60}
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold">Gospel Events <i class="text-2x-l">God Bless You</i></h3>
            </div>
            <p className="text-gray-300 mb-4">
              Le groupe gospel spécialisé dans l'animation d'événements
            </p>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="rel noopener"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="rel noopener"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:ge.godblessyou@gmail.com"
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#who" className="hover:text-primary transition-colors">
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link href="/repertoire" className="hover:text-primary transition-colors">
                  Répertoire
                </Link>
              </li>
              <li>
                <Link href="/#formules" className="hover:text-primary transition-colors">
                  Nos formules
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>ge.godblessyou@gmail.com</span>
              </div>
              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="bg-primary text-darkBlue px-4 py-2 rounded-full hover:bg-primary/80 transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gospel Events <i>God Bless You</i>. Tous droits réservés.</p>
          <div className="mt-2 text-sm">
            <span className="font-cursive text-lg text-primary">
              Musicalement, Joëlle & Stéphanie
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
