import Offer from "../components/Cards/Offer";
import { experts } from "../utils/constants/experts";
import Expert from "../components/Cards/Expert";
export default function Acting() {
  return (
    <div>
      <section>
        <div>
          <p>Démarrez votre projet</p>
          <span>Acting</span>
        </div>
        <div>
          <span>Acting</span>
          <span>Déclinaison</span>
          <span>Brief</span>
          <span>Script</span>
          <span>Montage</span>
          <span>Tournage</span>
        </div>
      </section>
      <section>
        <div>
          {/* Left */}
          <div>
            {/* Top */}
            <div>
              <p>Des tournages de qualité</p>
              <p>Un snack content personnalisé</p>
            </div>
            {/* Bottom */}
            <div>
              <div>
                <img src="" alt="" />
                <p>Accroches et messages percutants</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Sous-titrage et audio-description</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Formats adaptés</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Réalisation et montages impactants</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Direction artistique fidèle</p>
              </div>
            </div>
          </div>
          {/* Right */}
          <div>{/* Animation */}</div>
        </div>
      </section>
      <section>
        <Offer />
        <Offer
          isPopular={true}
          imgSrc="/images/Snack-Content 2.jpg"
          offer="gold"
        />
        <Offer imgSrc="/images/Snack-Content 3.jpg" offer="premium" />
      </section>
      <section>
        <p>Nos experts</p>
        <div>
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
    </div>
  );
}
