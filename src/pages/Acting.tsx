import Offer from "../components/Cards/Offer";
import { experts } from "../utils/constants/experts";
import Expert from "../components/Cards/Expert";
import Footer from "../components/Footer/Footer";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";
import { useState } from "react";
import Navbar from "../components/NavBar/NavBar";

export default function Acting() {
  const [focus, setFocus] = useState(2);
  const [imgOrders, setImgOrders] = useState([1, 2, 3]);
  const imgs = [
    { src: "/images/Pub1.png", alt: "pub 1" },
    { src: "/images/Pub2.png", alt: "pub 2" },
    { src: "/images/Pub3.png", alt: "pub 3" },
  ];
  const handleLeftButtonClick = () => {
    setImgOrders([imgOrders[1], imgOrders[2], imgOrders[0]]);
  };
  const handleRightButtonClick = () => {
    setImgOrders([imgOrders[2], imgOrders[0], imgOrders[1]]);
    // setFocus(focus + 1);
  };

  const getOrder = (index: number) => {
    if (imgOrders.indexOf(index) + 1 === 1) {
      return "order-1 h-32.5 w-20";
    }
    if (imgOrders.indexOf(index) + 1 === 2) {
      return "order-2 w-42.5 h-75";
    }
    if (imgOrders.indexOf(index) + 1 === 3) {
      return "order-3 h-32.5 w-20";
    }
  };
  return (
    <div>
      <Navbar />
      <section className="bg-linear-to-b from-snackly-purple to-snackly-blue text-white flex flex-col gap-y-25 py-15 px-2.5 items-center">
        <section className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-h5 uppercase">Démarrez votre projet</p>
            <span className="text-h2 font-bold uppercase">Acting</span>
          </div>
          <div className="animate-rotation w-125 h-98.75 relative flex items-center justify-center">
            <span className="animate-rotationback text-t3 uppercase w-36.25 h-36.25 bg-white/90 border-5 text-snackly-purple flex items-center justify-center rounded-full border-white border-solid">
              Acting
            </span>
            {/* <span>bonjour</span> */}
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white top-0">
              Déclinaison
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white left-0 top-35">
              Brief
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white right-0 top-35">
              Script
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white left-17.5 bottom-0">
              Montage
            </span>
            <span className="animate-rotationback absolute bg-white/20 text-t3 px-3.75 py-0.5 text-white right-17.5 bottom-0">
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
            <div className="flex flex-col w-125 h-98.75 bg-linear-to-b from-snackly-purple to-snackly-dark-purple justify-center items-center gap-y-8.75 px-5">
              {/* Top */}
              <div className="flex justify-between items-center">
                {/* {`${console.log(focus)}`} */}
                <img
                  src="/icons/video-arrow.svg"
                  alt="video-arrow"
                  className="w-12.5 h-12.5  cursor-pointer"
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
                    src="/images/Pub1.png"
                    alt="pub 1"
                    className={`${getOrder(1)}`}
                  />
                  <img
                    src="/images/Pub2.png"
                    alt="pub 2"
                    className={`${getOrder(2)}`}
                  />
                  <img
                    src="/images/Pub3.png"
                    alt="pub 3"
                    className={`${getOrder(3)}`}
                  />
                </div>
                <img
                  src="/icons/video-arrow.svg"
                  alt="video-arrow"
                  className={`rotate-180 w-12.5 h-12.5  cursor-pointer`}
                  onClick={() => handleRightButtonClick()}
                />
              </div>
              {/* Bottom */}
              <div className="flex gap-x-2.5">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
              </div>
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
