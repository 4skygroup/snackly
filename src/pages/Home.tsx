// import Button from "../components/Button/Button";
// import Expert from "../components/Cards/Expert";
// import Offer from "../components/Cards/Offer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import Button from "../components/Button/Button";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import Tag from "../components/Tag/Tag";
import Partner from "../components/Partner/Partner";
import Meta from "/images/Meta.webp";
import Tiktok from "/images/Tiktok.webp";
import SnapChat from "/images/SnapChat.webp";
import Youtube from "/images/Youtube.webp";
import Google from "/images/Google.webp";
import Navbar from "../components/NavBar/NavBar";
import { useState } from "react";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import { useTranslation } from "react-i18next";
export default function Home() {
  const [tagsClicked, setTagsClicked] = useState([true, false, false]);
  const [actingClicked, setActingClicked] = useState(false);
  const [motionClicked, setMotionClicked] = useState(false);

  const { t } = useTranslation();
  return (
    <div className="text-white">
      <Helmet>
        <title>
          Snackly — Agence Snack Content | Vidéos Publicitaires Performantes
        </title>
        <meta
          name="description"
          content="Snackly, agence spécialisée en Snack Content. Créations vidéo pensées pour performer sur tous vos leviers digitaux : Acting, Motion Design, formats publicitaires adaptés à chaque média."
        />
        <link rel="canonical" href="https://snacklyagency.com/" />
        <meta property="og:url" content="https://snacklyagency.com/" />
        <meta
          property="og:title"
          content="Snackly — Agence Snack Content | Vidéos Publicitaires Performantes"
        />
        <meta
          property="og:description"
          content="Snackly, agence spécialisée en Snack Content. Créations vidéo pensées pour performer sur tous vos leviers digitaux."
        />
        <meta
          property="og:image"
          content="https://snacklyagency.com/images/Snackly%20Video.png"
        />
        <meta name="twitter:title" content="Snackly — Agence Snack Content" />
        <meta
          name="twitter:description"
          content="Snackly, agence spécialisée en Snack Content. Créations vidéo pensées pour performer sur tous vos leviers digitaux."
        />
        <meta
          name="twitter:image"
          content="https://snacklyagency.com/images/Snackly%20Video.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://snacklyagency.com/#webpage",
            url: "https://snacklyagency.com/",
            name: "Snackly — Agence Snack Content",
            description:
              "Agence spécialisée en Snack Content. Créations vidéo pensées pour performer sur tous vos leviers digitaux.",
            inLanguage: "fr-FR",
            isPartOf: { "@id": "https://snacklyagency.com/#website" },
          })}
        </script>
      </Helmet>
      <section className="lg:h-screen">
        <Navbar />
        <div className="sm:px-7.5 max-sm:px-2 bg-linear-to-b from-snackly-purple lg:h-full to-snackly-blue flex max-sm:flex-col justify-center items-center gap-20 sm:pb-20 max-sm:py-5">
          {/* Left */}
          <div className="max-w-183.75 flex flex-col gap-y-7.5 justify-center max-sm:items-center">
            <p className="uppercase mdpp:text-h2 flex flex-col mdpp:leading-28.75 pb-2.5 max-mdpp:text-h4 max-mdpp:leading-22 max-sm:text-center">
              Snack Content Agency
            </p>
            <p className="mdpp:text-t1 max-w-177 leading-9.5 pb-7.5 max-mdpp:text-t3 max-sm:text-center">
              {t("home.catchPhrase")}
            </p>
            <Button isHome={true} />
          </div>
          {/* Right */}
          <div>
            <img
              src="/images/Snackly-use-case.webp"
              alt=""
              loading="lazy"
              className="w-87.5 rounded-r01"
            />
            {/* <video
              className="w-87.5 rounded-r01 border-2 border-black"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="/videos/Snackly-motion.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>
      </section>
      <section className="bg-black flex flex-col items-center py-17.5 px-5 gap-y-10">
        <p className="mdpp:text-t1 max-mdpp:text-t3">
          {t("home.titles.snackContent")}
        </p>
        <div className="flex flex-col gap-7.5">
          {/* Top */}
          <nav className="flex justify-between w-full max-sm:flex-col max-sm:gap-y-2.5 items-center">
            <Tag
              content={t("home.tags.creativity.label")}
              isOpaque={!tagsClicked[0]}
              onClick={() => setTagsClicked([true, false, false])}
            />
            <Tag
              content={t("home.tags.content.label")}
              isOpaque={!tagsClicked[1]}
              onClick={() => setTagsClicked([false, true, false])}
            />
            <Tag
              content={t("home.tags.pub.label")}
              isOpaque={!tagsClicked[2]}
              onClick={() => setTagsClicked([false, false, true])}
            />
          </nav>
          {/* Bottom */}
          <div className="max-w-278.75 px-2.5">
            <p
              className={`${tagsClicked[0] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              {t("home.tags.creativity.text")}
              {/* <br /> */}
            </p>
            <p
              className={`${tagsClicked[1] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              {t("home.tags.content.text")}
            </p>
            <p
              className={`${tagsClicked[2] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              {t("home.tags.pub.text")}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-25 py-50 bg-linear-to-b from-snackly-blue to-snackly-purple">
        <div
          className={`group hover:w-full ${actingClicked ? "w-full" : ""} transition-all duration-500 bg-white mdpp:w-162.5 mdpp:h-125 sm:max-mdpp:w-120 sm:max-mdpp:h-100 max-sm:w-70 max-sm:h-80 rounded-tr-full rounded-br-full flex flex-col justify-center hover:items-center items-end gap-y-5 px-17.5`}
          onClick={() => setActingClicked(!actingClicked)}
        >
          <span className="group-hover:hidden mdpp:text-h1 sm:max-mdpp:text-h3 max-sm:text-h5 text-snackly-purple font-bold ">
            ACTING
          </span>
          <span className="high:hidden group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            {t("home.acting.hover")}
          </span>
          <span className="hidden high:flex group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            {t("home.acting.click")}
          </span>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
            {t("home.acting.title")}
          </p>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3">
            {t("home.acting.text")}
          </p>
          <Link to="/acting">
            <span className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
              {t("home.acting.cta")}{" "}
              <img
                src="/icons/arrow-right.svg"
                alt=""
                className="pl-2.5"
                loading="lazy"
              />
            </span>
          </Link>
        </div>
        <div
          className={`group hover:w-full ${actingClicked ? "w-full" : ""} transition-all duration-500 bg-white mdpp:w-162.5 mdpp:h-125 sm:max-mdpp:w-120 sm:max-mdpp:h-100 max-sm:w-70 max-sm:h-80 rounded-tl-full rounded-bl-full flex flex-col justify-center hover:items-center items-start gap-y-5 px-17.5 self-end`}
          onClick={() => setMotionClicked(!motionClicked)}
        >
          <span className="group-hover:hidden mdpp:text-h1 sm:max-mdpp:text-h3 max-sm:text-h5 text-snackly-blue font-bold">
            MOTION
          </span>
          <span className="high:hidden group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-blue/50 font-bold">
            {t("home.motion.hover")}
          </span>
          <span className="hidden high:flex group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            {t("home.motion.click")}
          </span>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
            {t("home.motion.title")}
          </p>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3">
            {t("home.motion.text")}
          </p>
          <Link to="/motion">
            <span className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
              {t("home.motion.cta")}{" "}
              <img
                src="/icons/arrow-right.svg"
                alt=""
                className="pl-2.5"
                loading="lazy"
              />
            </span>
          </Link>
        </div>
      </section>
      {/* Icones des partenaires */}
      <section className="bg-black flex flex-col px-10 py-15 justify-center items-center gap-y-12">
        <h2 className="md:text-t2 max-md:text-t3">
          {t("home.titles.partners")}
        </h2>
        <div className="flex max-sm:flex-col items-center gap-12.5 justify-center">
          <Partner src={Meta} alt="Meta" label="Business Partner" />
          <Partner src={Tiktok} alt="Tiktok" label="Marketing Partner" />
          <Partner src={Google} alt="Google" label="Google Partner" />
          <Partner src={Youtube} alt="Youtube" label="Youtube" />
          <Partner src={SnapChat} alt="SnapChat" label="SnapChat" />
        </div>
      </section>
      <FAQ />
      <Footer policy={policy} services={services} />
    </div>
  );
}
