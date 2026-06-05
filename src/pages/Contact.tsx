import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm.tsx/ContactForm";
import Footer from "../components/Footer/Footer";
import Logo from "../components/Logo/Logo";
import Navbar from "../components/NavBar/NavBar";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";

export default function Contact() {
  return (
    <div className="bg-snackly-purple text-white flex flex-col items-center ">
      <Helmet>
        <title>Contact — Démarrez votre projet Snack Content | Snackly</title>
        <meta name="description" content="Contactez l'agence Snackly pour lancer votre projet snack content. Discutons de votre stratégie vidéo et de vos objectifs de performance digitale." />
        <link rel="canonical" href="https://snackly.fr/contact" />
        <meta property="og:url" content="https://snackly.fr/contact" />
        <meta property="og:title" content="Contact — Démarrez votre projet Snack Content | Snackly" />
        <meta property="og:description" content="Contactez l'agence Snackly pour lancer votre projet snack content et booster votre performance digitale." />
        <meta property="og:image" content="https://snackly.fr/logo/Snackly.png" />
        <meta name="twitter:title" content="Contact Snackly — Lancez votre projet" />
        <meta name="twitter:description" content="Contactez l'agence Snackly pour lancer votre projet snack content." />
        <meta name="twitter:image" content="https://snackly.fr/logo/Snackly.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://snackly.fr/contact#webpage",
          "url": "https://snackly.fr/contact",
          "name": "Contact — Snackly",
          "description": "Contactez l'agence Snackly pour lancer votre projet snack content.",
          "inLanguage": "fr-FR",
          "isPartOf": { "@id": "https://snackly.fr/#website" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://snackly.fr/" },
              { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://snackly.fr/contact" }
            ]
          }
        })}</script>
      </Helmet>
      <Navbar />
      <div className="w-full min-h-[calc(90vh-100px)] py-3 px-4 md:px-8 flex items-center justify-center border-t border-b border-white">
        {/* Cadre principal arrondi de la maquette */}
        <div className="max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-sm border border-white mt-6 relative">
          {/* Titre de la page */}
          {/* <h1 className="text-3xl md:text-4xl text-center uppercase tracking-wide mb-2 text-white drop-shadow-sm">
                    Contact us
                </h1> */}

          <p className="text-2xl md:text-3xl text-right mb-2 tracking-wide text-white drop-shadow-sm">
            Let&apos;s start your strategy !
          </p>

          {/* Grille : Logo à gauche / Formulaire à droite */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* CÔTÉ GAUCHE : Énorme Logo textuel centré verticalement */}
            <div className="md:col-span-5 flex justify-center items-center p-4">
              <Logo
                src="/logo/Snackly.png"
                alt="Logo Snackly"
                className="w-full max-w-70 md:max-w-full h-auto object-contain drop-shadow-sm"
              />
            </div>

            {/* CÔTÉ DROIT : Le Formulaire complet */}
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer policy={policy} services={services} />
    </div>
  );
}
