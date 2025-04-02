import Header from "../components/header";
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
          <ul className="text-3xl">
            <li>La source</li>
            <li>Beautiful you are</li>
            <li>Amazing Grace</li>
            <li>Total Praise</li>
            <li>Down by the riverside</li>
            <li>When the saints</li>
            <li>How great is our God</li>
            <li>Take me to the King</li>
            <li>Glory Glory Alleluyah</li>
            <li>Wade in the water</li>
            <li>Stand by me</li>
            <li>A thousand years</li>
            <li>His eye is on the sparrow</li>
            <li>Ma vie et ma joie</li>
            <li>Agnus dei</li>
            <li>You raise me up</li>
            <li>L'envie d'aimer</li>
            <li>I will always love you</li>
            <li>Halleluyah</li>
            <li>I will follow him</li>
            <li>Joyful joyful</li>
            <li>Go tell it on the Mountain</li>
            <li>Soon and very soon</li>
            <li>Break every chain</li>
          </ul>
        </div>
        {/* Qui somme nous */}

      </main>
      <footer className=""></footer>
    </div>
  );
}
