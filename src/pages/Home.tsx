// import Button from "../components/Button/Button";
// import Expert from "../components/Cards/Expert";
// import Offer from "../components/Cards/Offer";
import { Link } from "react-router";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import Tag from "../components/Tag/Tag";
import Partner from "../components/Partner/Partner";
import Meta from "/images/Meta.png";
import Tiktok from "/images/Tiktok.png";
import SnapChat from "/images/SnapChat.png";
import Youtube from "/images/Youtube.png";
import Google from "/images/Google.png";
export default function Home() {
  return (
    <div className="text-white bg-gray-white">
      <section>
        <div className="bg-linear-to-b from-snackly-purple to-snackly-blue flex justify-center items-center gap-x-20 py-25">
          {/* Left */}
          <div className="max-w-183.75 ">
            <p className="uppercase text-h2 flex flex-col leading-28.75 pb-2.5">
              Snack Content Agency
            </p>
            <p className="text-t1 max-w-177 leading-9.5 pb-7.5">
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
        <p className="text-t1">Le Snack Content à votre portée</p>
        <div className="flex flex-col gap-7.5">
          {/* Top */}
          <nav className="flex justify-between w-full">
            <Tag content="Créativité dans l’exécution" />
            <Tag content="Contenu percutant" isOpaque={true} />
            <Tag content="Idéal pour l’espace pub" isOpaque={true} />
          </nav>
          {/* Bottom */}
          <div className="max-w-278.75 px-2.5">
            <p className="text-t3">
              Nos créations sont pensées pour générer de la performance sur
              l’ensemble du funnel média, de la notoriété à la conversion.
              <br />
              Nos experts repèrent les meilleures idées du web et les
              transforment en vidéos impactantes, alignées avec les stratégies
              médias de nos clients.
            </p>
            {/* <p className="text-t3">
              Chaque jour, un internaute est exposé à plus de 15 000
              sollicitations commerciales. Pour éviter la lassitude liée à la
              répétition de contenus similaires, les algorithmes de diffusion
              privilégient des contenus renouvelés et régulièrement mis à jour.
            </p>
            <p className="text-t3">
              Chaque canal de diffusion répond à ses propres codes : formats
              publicitaires, durées, usages des audiences. Une création
              performante est avant tout une création pensée pour le média qui
              la porte.
            </p> */}
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-25 py-50 bg-linear-to-b from-snackly-blue to-snackly-purple">
        <div className="group hover:animate-grow bg-white w-162.5 rounded-tr-full rounded-br-full flex flex-col justify-center hover:items-center items-end gap-y-5 h-125 px-17.5">
          <span className="group-hover:hidden text-h1 text-snackly-purple font-bold ">
            ACTING
          </span>
          <span className="group-hover:hidden text-t4 text-snackly-purple/50 font-bold">
            Survolez-moi
          </span>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 text-t3">
            Des contenus stratégiques pensés pour maximiser votre impact média
          </p>
          <p className="hidden group-hover:flex text-snackly-purple max-w-157.5 text-t3">
            Nous concevons et produisons des contenus personnalisés, alignés sur
            vos objectifs de visibilité et de performance. Nos équipes
            organisent des tournages adaptés à votre projet
          </p>
          <Link to="/action">
            <span className="hidden group-hover:flex text-snackly-purple max-w-157.5 text-t3">
              En savoir plus{" "}
              <img src="/icons/arrow-right.svg" alt="" className="pl-2.5" />
            </span>
          </Link>
        </div>
        <div className="group hover:animate-grow bg-white w-162.5 rounded-tl-full rounded-bl-full flex flex-col justify-center hover:items-center items-start gap-y-5 h-125 px-17.5 self-end">
          <span className="group-hover:hidden text-h1 text-snackly-blue font-bold">
            MOTION
          </span>
          <span className="group-hover:hidden text-t4 text-snackly-blue/50 font-bold">
            Survolez-moi
          </span>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 text-t3">
            Des contenus stratégiques pensés pour maximiser votre impact média
          </p>
          <p className="hidden group-hover:flex text-snackly-blue max-w-157.5 text-t3">
            Nous concevons et produisons des contenus personnalisés, alignés sur
            vos objectifs de visibilité et de performance. Nos équipes
            organisent des tournages adaptés à votre projet
          </p>
          <Link to="/motion">
            <span className="hidden group-hover:flex text-snackly-blue max-w-157.5 text-t3">
              En savoir plus{" "}
              <img src="/icons/arrow-right.svg" alt="" className="pl-2.5" />
            </span>
          </Link>
        </div>
      </section>
      {/* Icones des partenaires */}
      <section className="bg-black flex items-end gap-x-12.5 px-10 py-15 justify-center">
        <Partner src={Meta} alt="Meta" label="Business Partner" />
        <Partner src={Tiktok} alt="Tiktok" label="Marketing Partner" />
        <Partner src={Google} alt="Google" label="Google Partner" />
        <Partner src={Youtube} alt="Youtube" label="Youtube" />
        <Partner src={SnapChat} alt="SnapChat" label="SnapChat" />
      </section>
      <section>
        <span>Foire aux questions</span>
        {/* Foire aux questions */}
        <div></div>
      </section>
      <Footer policy={policy} services={services} />
    </div>
  );
}
