import Button from "../components/Button/Button";
import Expert from "../components/Cards/Expert";
import Offer from "../components/Cards/Offer";
import Footer from "../components/Footer/Footer";
import { experts } from "../utils/constants/experts";
import { policy } from "../utils/constants/policy";
import { services } from "../utils/constants/services";

export default function Home() {
  return (
    <div className="text-white bg-gray-white">
      <Button />
      {experts.map((expert, index) => (
        <Expert
          key={index}
          name={expert.name}
          description={expert.description}
          link={expert.link}
        />
      ))}
      <Offer />
      <Offer
        isPopular={true}
        imgSrc="/images/Snack-Content 2.jpg"
        offer="gold"
      />
      <Offer imgSrc="/images/Snack-Content 3.jpg" offer="premium" />
      <Footer policy={policy} services={services} />
    </div>
  );
}
