"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PricingPage = () => {
  const controls = useAnimation();

  // Ajout de configuration correcte du hook useInView
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation ne se déclenche qu'une fois
    threshold: 0.1, // Le pourcentage visible avant déclenchement
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex flex-col items-center justify-center pt-12 pb-16 min-h-[70vh] bg-darkBlue text-secondaryText">
      <div className="flex justify-between w-full px-16">
      <h2 className="text-3xl font-bold mb-8 " id="formules">
        Nos Formules
      </h2>
      <h3 className="text-3xl font-bold mb-8 hidden md:block" id="formules">
        Chaque formule pour chaque situation
        </h3>
        <Image
          className="dark:invert"
          src="/logo-primary.png"
          alt="logo initial"
          width={60}
          height={38}
          priority
        />
     </div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-wrap justify-center gap-6 max-w-6xl "
      >
        {pricingData.map((plan, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col p-6 bg-lightBlue shadow-lg rounded-2xl text-center hover:text-lightBlue hover:bg-white transition duration-700 ease-in-out"
            style={{
              flex: "1 1 calc(33.333% - 1rem)",
              minWidth: "320px",
              maxWidth: "380px",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <ul className=" space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PricingPage;

const pricingData = [
  {
    title: "Standard",
    price: "$10/mois",
    features: ["3 chanteurs a cappella"],
  },
  {
    title: "Traditionnelle",
    price: "$20/mois",
    features: ["4 chanteurs a cappella"],
  },
  {
    title: "Prestige",
    price: "$30/mois",
    features: ["3 chanteurs ", "un musicien (pianiste ou guitariste)"],
  },
  {
    title: "Jet set",
    price: "$50/mois",
    features: ["4 chanteurs", "un musicien (pianiste ou guitariste)"],
  },
  {
    title: "Apothéose",
    price: "Sur mesure",
    features: [
      "5 chanteurs",
      "un musicien (pianiste ou guitariste)",
      "1 chant composé spécialement pour l’occasion",
    ],
  },
];
