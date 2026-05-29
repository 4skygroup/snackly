import Expert from "../components/Cards/Expert";
import Offer from "../components/Cards/Offer";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/NavBar";
import { experts } from "../utils/constants/experts";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";

export default function Motion() {
  return (
    <div>
      <Navbar />
      <section className="bg-linear-to-b from-snackly-purple to-snackly-blue text-white flex flex-col gap-y-25 py-15 px-2.5 items-center">
        <section className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-h5 uppercase">Démarrez votre projet</p>
            <span className="text-h2 font-bold uppercase">Motion</span>
          </div>
          <div>
            <span className="text-t3 uppercase w-36.25 h-36.25 bg-white/90 border-5 text-snackly-purple flex items-center justify-center rounded-full border-white border-solid">
              Motion
            </span>
            <span className="bg-white/20 text-t3 px-3.75 py-2 text-white">
              Déclinaison
            </span>
            <span className="bg-white/20 text-t3 px-3.75 py-2 text-white">
              Brief
            </span>
            <span className="bg-white/20 text-t3 px-3.75 py-2 text-white">
              Script
            </span>
            <span className="bg-white/20 text-t3 px-3.75 py-2 text-white">
              Montage
            </span>
            <span className="bg-white/20 text-t3 px-3.75 py-2 text-white">
              Tournage
            </span>
          </div>
        </section>
        <section className="max-w-300 bg-white/18 mx-auto p-20">
          <div className="flex gap-x-25">
            {/* Left */}
            <div className="flex flex-col gap-y-7.5">
              {/* Top */}
              <div className="flex flex-col gap-y-1.5">
                <p className="text-t1">Des tournages de qualité</p>
                <p className="text-t5">Un snack content personnalisé</p>
              </div>
              {/* Bottom */}
              <div className="flex flex-col gap-y-6">
                <div className="flex gap-x-10">
                  <img src="/icons/Script.svg" alt="" width="30px" />
                  <p className="text-t3">Accroches et messages percutants</p>
                </div>
                <div className="flex gap-x-10">
                  <img src="/icons/Subtitle.svg" alt="" width="30px" />
                  <p className="text-t3">Sous-titrage et audio-description</p>
                </div>
                <div className="flex gap-x-10">
                  <img src="/icons/Ratio.svg" alt="" width="30px" />
                  <p className="text-t3">Formats adaptés</p>
                </div>
                <div className="flex gap-x-10">
                  <img src="/icons/Clap.svg" alt="" width="30px" />
                  <p className="text-t3">Réalisation et montages impactants</p>
                </div>
                <div className="flex gap-x-10">
                  <img src="/icons/Design.svg" alt="" width="30px" />
                  <p className="text-t3">Direction artistique fidèle</p>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="w-125 h-98.75 bg-linear-to-b from-snackly-purple to-snackly-dark-purple">
              {/* Animation */}
            </div>
          </div>
        </section>
        <section className="flex gap-x-50">
          <Offer imgSrc="/images/Snack-Content-1.jpg" />
          <Offer
            isPopular={true}
            imgSrc="/images/Snack-Content-2.jpg"
            offer="gold"
          />
          <Offer imgSrc="/images/Snack-Content-3.jpg" offer="premium" />
        </section>
      </section>
      <section className="flex flex-col p-25 gap-y-17.5 items-center">
        <p className="text-h4 text-snackly-blue">Nos experts</p>
        <div className="flex overflow-x-scroll gap-12.5 max-w-310 py-1.25 no-scrollbar">
          {experts.map((expert, index) => (
            <Expert
              key={index}
              name={expert.name}
              description={expert.description}
              link={expert.link}
            />
          ))}
        </div>
      </section>
      <Footer policy={policy} services={services} />
    </div>
  );
}
