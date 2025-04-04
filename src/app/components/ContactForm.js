"use client";


import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    eventType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dans une application réelle, vous enverriez les données à un serveur
    console.log("Form data:", formData);

    // Afficher le message de succès
    setShowModal(true);

    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      eventType: "",
    });
    setIsSubmitted(true);
  };

  const Modal = () => (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <h3 className="text-xl font-bold text-darkBlue mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
        <div className="flex justify-center">
          <button
            variant="secondary"
            className="text-white"
            onClick={() => setShowModal(false)}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-8   " id="contact">
      <h2 className="text-3xl font-bold text-center mb-6 text-darkBlue">Contactez-nous</h2>
      <p className="text-center mb-8 text-base  md:text-xl">
        Envie de gospel pour votre événement ? Contactez-nous pour obtenir plus d'informations ou un devis personnalisé.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-base  md:text-xl">
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-base  md:text-xl">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-base  md:text-xl">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Votre téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="eventType" className="block text-sm font-medium text-base  md:text-xl">
              Type d'événement
            </label>
            <select
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
              required
            >
              <option value="" disabled>Sélectionnez le type d'événement</option>
              <option value="mariage">Mariage</option>
              <option value="bapteme">Baptême</option>
              <option value="anniversaire">Anniversaire</option>
              <option value="concert">Concert</option>
              <option value="corporate">Événement d'entreprise</option>
              <option value="autre">Autre</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message ou demande particulière"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
          ></textarea>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            variant="secondary"
            className="px-8 py-2 rounded-full text-lg bg-secondary text-white"
          >
            Envoyer
          </button>
        </div>
      </form>

      {showModal && <Modal />}
    </div>
  );
}
