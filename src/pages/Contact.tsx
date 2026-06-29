import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm.tsx/ContactForm";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import ContactInfoCards from "../components/ContactForm.tsx/ContactInfoCards";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="bg-snackly-purple text-white flex flex-col items-center">
      <Helmet>
        <title>Contact — Démarrez votre projet Snack Content | Snackly</title>
        <meta
          name="description"
          content="Contactez l'agence Snackly pour lancer votre projet snack content. Discutons de votre stratégie vidéo et de vos objectifs de performance digitale."
        />
        <link rel="canonical" href="https://snacklyagency.com/contact" />
        <meta property="og:url" content="https://snacklyagency.com/contact" />
        <meta
          property="og:title"
          content="Contact — Démarrez votre projet Snack Content | Snackly"
        />
        <meta
          property="og:description"
          content="Contactez l'agence Snackly pour lancer votre projet snack content et booster votre performance digitale."
        />
        <meta
          property="og:image"
          content="https://snacklyagency.com/logo/Snackly.png"
        />
        <meta
          name="twitter:title"
          content="Contact Snackly — Lancez votre projet"
        />
        <meta
          name="twitter:description"
          content="Contactez l'agence Snackly pour lancer votre projet snack content."
        />
        <meta
          name="twitter:image"
          content="https://snacklyagency.com/logo/Snackly.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://snacklyagency.com/contact#webpage",
            url: "https://snacklyagency.com/contact",
            name: "Contact — Snackly",
            description:
              "Contactez l'agence Snackly pour lancer votre projet snack content.",
            inLanguage: "fr-FR",
            isPartOf: { "@id": "https://snacklyagency.com/#website" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://snacklyagency.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: "https://snacklyagency.com/contact",
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <Navbar />
      <div className="w-full min-h-[calc(90vh-100px)] py-10 px-4 md:px-8 flex items-center justify-center border-t border-b border-white">
        {/* Cadre principal arrondi de la maquette */}
        <div className="max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-sm relative">
          {/* CÔTÉ DROIT : Le Formulaire complet */}
          {/* <ContactForm /> */}
          {/* </div> */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* ── Left column ── */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-t4 font-bold leading-tight tracking-tight text-white md:text-h7">
                  {t("contact.catchPhrase")}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/50">
                  {t("contact.detailedPhrase")}
                </p>
              </div>

              <ContactInfoCards />
            </div>

            {/* ── Right column ── */}
            <div>
              {/* Titre de la page */}
              <p className="text-t4 md:text-h7 font-bold md:text-3xl md:text-right mb-2 tracking-wide text-white drop-shadow-sm"></p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer policy={policy} services={services} />
    </div>
  );
}
