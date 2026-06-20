import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Offer from "../components/Cards/Offer";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import { useTranslation } from "react-i18next";

export default function Motion() {
  const { t } = useTranslation();
  const [imgOrders, setImgOrders] = useState([1, 2, 3]);
  const handleLeftButtonClick = () => {
    setImgOrders([imgOrders[1], imgOrders[2], imgOrders[0]]);
  };
  const handleRightButtonClick = () => {
    setImgOrders([imgOrders[2], imgOrders[0], imgOrders[1]]);
  };

  const getOrder = (index: number) => {
    if (imgOrders.indexOf(index) + 1 === 1) {
      return "order-1 h-50 w-27.5 blur-b4 rounded-r2 animate saturate-80";
    }
    if (imgOrders.indexOf(index) + 1 === 2) {
      return "order-2 h-62.5 w-35 blur-b4 relative -left-12.5 rounded-r2 animate saturate-80";
    }
    if (imgOrders.indexOf(index) + 1 === 3) {
      return "order-3 w-42.5 h-75 relative -left-27 rounded-r2 animate";
    }
  };
  return (
    <div>
      <Helmet>
        <title>
          Motion Design — Animations Digitales Percutantes | Snackly
        </title>
        <meta
          name="description"
          content="Créations motion design sur-mesure chez Snackly : animations percutantes adaptées à tous les formats digitaux pour booster votre stratégie de contenu vidéo."
        />
        <link rel="canonical" href="https://snacklyagency.com/Motion" />
        <meta property="og:url" content="https://snacklyagency.com/Motion" />
        <meta
          property="og:title"
          content="Motion Design — Animations Digitales Percutantes | Snackly"
        />
        <meta
          property="og:description"
          content="Créations motion design percutantes adaptées à tous les formats digitaux pour booster votre stratégie de contenu vidéo."
        />
        <meta
          property="og:image"
          content="https://snacklyagency.com/images/Snack-Content-2.jpg"
        />
        <meta
          name="twitter:title"
          content="Motion Design — Animations Digitales | Snackly"
        />
        <meta
          name="twitter:description"
          content="Créations motion design percutantes adaptées à tous les formats digitaux."
        />
        <meta
          name="twitter:image"
          content="https://snacklyagency.com/images/Snack-Content-2.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://snacklyagency.com/Motion#webpage",
            url: "https://snacklyagency.com/Motion",
            name: "Motion Design — Animations Digitales Percutantes | Snackly",
            description:
              "Créations motion design sur-mesure : animations percutantes adaptées à tous les formats digitaux.",
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
                  name: "Motion Design",
                  item: "https://snacklyagency.com/Motion",
                },
              ],
            },
            mainEntity: {
              "@type": "Service",
              "@id": "https://snacklyagency.com/#motion",
              name: "Motion Design",
              url: "https://snacklyagency.com/Motion",
              description:
                "Des créations motion design percutantes pour votre stratégie digitale.",
              provider: { "@id": "https://snacklyagency.com/#organization" },
            },
          })}
        </script>
      </Helmet>
      <Navbar />
      <section className="bg-linear-to-b from-snackly-purple to-snackly-blue text-white flex flex-col gap-y-25 py-15 px-2.5 items-center">
        <section className="flex justify-center lgp:gap-10  max-xsp:items-center max-mdpp:flex-col xsp:max-mdpp:gap-y-25 max-xsp:gap-y-5">
          <div className="flex flex-col max-xsp:w-fit max-xsp:justify-center max-xsp:items-center">
            <p className="lgp:text-h5 uppercase xsp:max-lgp:text-h6 max-xsp:text-h7 max-xsp:text-center w-fit">
              {t("motion.catchPhrase")}
            </p>
            <span className="lgp:text-h2 font-bold uppercase xsp:max-lgp:text-h3 max-xsp:text-h4 max-xsp:text-center w-fit">
              Motion
            </span>
          </div>
          {/* <div className="relative"> */}
          <div className="animate-rotation w-125 h-98.75 relative flex items-center justify-center xsp:max-sm:scale-80 max-xsp:scale-60">
            <span className="animate-rotationback text-t3 uppercase w-36.25 h-36.25 bg-white/90 border-5 text-snackly-purple flex items-center justify-center rounded-full border-white border-solid">
              Motion
            </span>
            {/* <span>bonjour</span> */}
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white top-0">
              {t("motion.rotatingAnimation.labels.storyboard")}
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white left-0 top-35">
              {t("motion.rotatingAnimation.labels.brief")}
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white right-0 top-35">
              {t("motion.rotatingAnimation.labels.script")}
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white left-17.5 bottom-0">
              {t("motion.rotatingAnimation.labels.animation")}
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white right-17.5 bottom-0">
              {t("motion.rotatingAnimation.labels.delivery")}
            </span>
          </div>
          {/* </div> */}
        </section>
        <section className="max-sm:w-100 max-sm:p-0 max-w-300 bg-white/18 mx-auto lgpp:p-20 sm:max-lgpp:p-10">
          <div className="flex lgp:gap-25 max-lgp:gap-10 items-center max-lgm:flex-col">
            {/* Left */}
            <div className="flex flex-col gap-y-7.5 max-lgp:pt-10">
              {/* Top */}
              <div className="flex flex-col gap-y-1.5">
                <p className="sm:text-t1 max-sm:text-t3">
                  {t("motion.sections.presentation.title")}
                </p>
                <p className="text-t5">
                  {t("motion.sections.presentation.subtitle")}
                </p>
              </div>
              {/* Bottom */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-10">
                  <img
                    src="/icons/animate.svg"
                    alt=""
                    width="30px"
                    loading="lazy"
                  />
                  <p className="sm:text-t3 max-sm:text-t5">
                    {t("motion.sections.presentation.services.animation")}
                  </p>
                </div>
                <div className="flex gap-x-10">
                  <img
                    src="/icons/Design.svg"
                    alt=""
                    width="30px"
                    loading="lazy"
                  />
                  <p className="sm:text-t3 max-sm:text-t5">
                    {t("motion.sections.presentation.services.conception")}
                  </p>
                </div>
                <div className="flex gap-x-10">
                  <img
                    src="/icons/Ratio.svg"
                    alt=""
                    width="30px"
                    loading="lazy"
                  />
                  <p className="sm:text-t3 max-sm:text-t5">
                    {t("motion.sections.presentation.services.format")}
                  </p>
                </div>
                {/* <div className="flex gap-x-10">
                  <img
                    src="/icons/Subtitle.svg"
                    alt=""
                    width="30px"
                    loading="lazy"
                  />
                  <p className="sm:text-t3 max-sm:text-t5">
                    Sous-titrage et audio-description
                  </p>
                </div> */}
              </div>
            </div>
            {/* Right */}
            <div className="max-sm:scale-70 flex flex-col w-125 h-98.75 bg-linear-to-b from-snackly-purple to-snackly-dark-purple justify-center items-center gap-y-8.75 px-5">
              {/* Top */}
              <div className="flex justify-between items-center">
                {/* {`${console.log(focus)}`} */}
                <img
                  src="/icons/video-arrow.svg"
                  alt="video-arrow"
                  className="w-12.5 h-12.5  cursor-pointer"
                  loading="lazy"
                  onClick={() => handleLeftButtonClick()}
                />
                <div className="flex items-center mx-5">
                  {/* {imgOrders.map((io, index) => (
                    <img
                      key={index}
                      src={imgs[io - 1].src}
                      alt={imgs[io - 1].alt}
                      className={`${index === 1 ? "w-42.5 h-75" : "h-32.5 w-20"} ${index === 1 ? "animate-toone" : index === 2 ? "animate-totwo" : "animate-tothree"}`}
                    />
                  ))} */}
                  <img
                    src="/images/Motion1.webp"
                    alt="motion 1"
                    className={`${getOrder(1)} object-cover`}
                    loading="lazy"
                  />
                  <img
                    src="/images/Motion2.webp"
                    alt="motion 2"
                    className={`${getOrder(2)} object-cover`}
                    loading="lazy"
                  />
                  <img
                    src="/images/Motion3.webp"
                    alt="motion 3"
                    className={`${getOrder(3)} object-cover`}
                    loading="lazy"
                  />
                </div>
                <img
                  src="/icons/video-arrow.svg"
                  alt="video-arrow"
                  className={`rotate-180 w-12.5 h-12.5  cursor-pointer`}
                  loading="lazy"
                  onClick={() => handleRightButtonClick()}
                />
              </div>
              {/* Bottom */}
              <div className="flex gap-x-2.5">
                <div
                  className={`w-2.5 h-2.5 bg-white rounded-full ${getOrder(1)?.split(" ")[0]}`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 bg-white/30 rounded-full ${getOrder(2)?.split(" ")[0]}`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 bg-white/30 rounded-full ${getOrder(3)?.split(" ")[0]}`}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex max-mdpp:flex-col max-mdpp:gap-y-10 mdpp:max-lgp:gap-x-20 lgp:max-xl:gap-x-35 xl:gap-x-50">
          <Offer imgSrc="/images/Motion4.webp" />
          <Offer isPopular={true} imgSrc="/images/Motion5.webp" offer="gold" />
          <Offer imgSrc="/images/Motion6.webp" offer="premium" />
        </section>
      </section>
      {/* <section className="flex flex-col max-sm:px-5 max-sm:py-15 sm:p-25 gap-y-17.5 items-center">
        <p className="lg:text-h4 text-snackly-blue sm:max-lg:text-h5 max-sm:text-h6">
          {t("motion.sections.experts.label")}
        </p>
        <div className="relative overflow-x-hidden w-full max-w-310">
          <div className="flex overflow-x-scroll gap-12.5 max-w-310 py-1.25 no-scrollbar max-xl:w-full min-w-75">
            <div className="relative overflow-x-hidden w-full max-w-310">
              <div className="flex overflow-x-scroll gap-12.5 max-w-310 py-1.25 no-scrollbar max-xl:w-full min-w-75">
                <Carrousel />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer policy={policy} services={services} />
    </div>
  );
}
