// import Button from "../components/Button/Button";
// import Expert from "../components/Cards/Expert";
// import Offer from "../components/Cards/Offer";
import { Link } from "react-router";
import Button from "../components/Button/Button";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import Tag from "../components/Tag/Tag";
import Partner from "../components/Partner/Partner";
import Meta from "/images/Meta.png";
import Tiktok from "/images/Tiktok.png";
import SnapChat from "/images/SnapChat.png";
import Youtube from "/images/Youtube.png";
import Google from "/images/Google.png";
import Navbar from "../components/NavBar/NavBar";
import { useState } from "react";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
export default function Home() {
  const [tagsClicked, setTagsClicked] = useState([true, false, false]);
  return (
    <div className="text-white">
      <Navbar />
      <section className="">
        <div className="px-7.5 bg-linear-to-b from-snackly-purple to-snackly-blue flex max-sm:flex-col justify-center items-center gap-20 py-25">
          {/* Left */}
          <div className="max-w-183.75 flex flex-col gap-y-7.5 justify-center max-sm:items-center">
            <p className="uppercase mdpp:text-h2 flex flex-col mdpp:leading-28.75 pb-2.5 max-mdpp:text-h4 max-mdpp:leading-22 max-sm:text-center">
              Snack Content Agency
            </p>
            <p className="mdpp:text-t1 max-w-177 leading-9.5 pb-7.5 max-mdpp:text-t3 max-sm:text-center">
              Des créations vidéo pensées pour performer sur tous vos leviers
              digitaux.
            </p>
            <Button />
          </div>
          {/* Right */}
          <div>
            <img src="/images/Snackly Video.png" alt="" />
          </div>
        </div>
      </section>
      <section className="bg-black flex flex-col items-center py-17.5 px-5 gap-y-10">
        <p className="mdpp:text-t1 max-mdpp:text-t3">
          Le Snack Content à votre portée
        </p>
        <div className="flex flex-col gap-7.5">
          {/* Top */}
          <nav className="flex justify-between w-full max-sm:flex-col max-sm:gap-y-2.5 items-center">
            <Tag
              content="Créativité dans l’exécution"
              isOpaque={!tagsClicked[0]}
              onClick={() => setTagsClicked([true, false, false])}
            />
            <Tag
              content="Contenu percutant"
              isOpaque={!tagsClicked[1]}
              onClick={() => setTagsClicked([false, true, false])}
            />
            <Tag
              content="Idéal pour l’espace pub"
              isOpaque={!tagsClicked[2]}
              onClick={() => setTagsClicked([false, false, true])}
            />
          </nav>
          {/* Bottom */}
          <div className="max-w-278.75 px-2.5">
            <p
              className={`${tagsClicked[0] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              Nos créations sont pensées pour générer de la performance sur
              l’ensemble du funnel média, de la notoriété à la conversion.
              <br />
              Nos experts repèrent les meilleures idées du web et les
              transforment en vidéos impactantes, alignées avec les stratégies
              médias de nos clients.
            </p>
            <p
              className={`${tagsClicked[1] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              Chaque jour, un internaute est exposé à plus de 15 000
              sollicitations commerciales. Pour éviter la lassitude liée à la
              répétition de contenus similaires, les algorithmes de diffusion
              privilégient des contenus renouvelés et régulièrement mis à jour.
            </p>
            <p
              className={`${tagsClicked[2] ? "block" : "hidden"} text-t3 max-sm:text-center`}
            >
              Chaque canal de diffusion répond à ses propres codes : formats
              publicitaires, durées, usages des audiences. Une création
              performante est avant tout une création pensée pour le média qui
              la porte.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-25 py-50 bg-linear-to-b from-snackly-blue to-snackly-purple">
        <div className="group hover:w-full transition-all duration-500 bg-white mdpp:w-162.5 mdpp:h-125 sm:max-mdpp:w-120 sm:max-mdpp:h-100 max-sm:w-70 max-sm:h-80 rounded-tr-full rounded-br-full flex flex-col justify-center hover:items-center items-end gap-y-5 px-17.5">
          <span className="group-hover:hidden mdpp:text-h1 sm:max-mdpp:text-h3 max-sm:text-h5 text-snackly-purple font-bold ">
            ACTING
          </span>
          <span className="high:hidden group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            Survolez-moi
          </span>
          <span className="hidden high:flex group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            Cliquez
          </span>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
            Des contenus stratégiques pensés pour maximiser votre impact média
          </p>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3">
            Nous concevons et produisons des contenus personnalisés, alignés sur
            vos objectifs de visibilité et de performance. Nos équipes
            organisent des tournages adaptés à votre projet
          </p>
          <Link to="/action">
            <span className="hidden group-hover:flex text-snackly-purple max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
              En savoir plus{" "}
              <img src="/icons/arrow-right.svg" alt="" className="pl-2.5" />
            </span>
          </Link>
        </div>
        <div className="group hover:w-full transition-all duration-500 bg-white mdpp:w-162.5 mdpp:h-125 sm:max-mdpp:w-120 sm:max-mdpp:h-100 max-sm:w-70 max-sm:h-80 rounded-tl-full rounded-bl-full flex flex-col justify-center hover:items-center items-start gap-y-5 px-17.5 self-end">
          <span className="group-hover:hidden mdpp:text-h1 sm:max-mdpp:text-h3 max-sm:text-h5 text-snackly-blue font-bold">
            MOTION
          </span>
          <span className="high:hidden group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-blue/50 font-bold">
            Survolez-moi
          </span>
          <span className="hidden high:flex group-hover:hidden sm:text-t4 max-sm:text-t5 text-snackly-purple/50 font-bold">
            Cliquez
          </span>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
            Des contenus stratégiques pensés pour maximiser votre impact média
          </p>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3">
            Nous concevons et produisons des contenus personnalisés, alignés sur
            vos objectifs de visibilité et de performance. Nos équipes
            organisent des tournages adaptés à votre projet
          </p>
          <Link to="/motion">
            <span className="hidden group-hover:flex text-snackly-blue max-w-157.5 max-sm:text-t5 sm:text-t3 font-bold">
              En savoir plus{" "}
              <img src="/icons/arrow-right.svg" alt="" className="pl-2.5" />
            </span>
          </Link>
        </div>
      </section>
      {/* Icones des partenaires */}
      <section className="bg-black flex flex-col px-10 py-15 justify-center items-center gap-y-12">
        <h2 className="md:text-t2 max-md:text-t3">Nos partenaires</h2>
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
