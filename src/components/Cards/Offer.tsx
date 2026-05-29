import { offers } from "../../utils/constants/offers";
import Button from "../Button/Button";

export default function Offer({
  isPopular = false,
  imgSrc = "/images/Snack-Content 1.jpg",
  offer = "start",
}: {
  isPopular?: boolean;
  imgSrc?: string;
  offer?: "start" | "gold" | "premium";
}) {
  return (
    <article
      className={`w-65.75 h-73.75 ${isPopular ? "bg-snackly-purple/50" : "bg-snackly-card-gray/18"} rounded-r1 flex flex-col`}
    >
      <div className="w-full h-53.75 flex justify-center items-center bg-snackly-card-gray/44 rounded-r1">
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(58, 12, 163, 0.6), rgba(58, 12, 163, 0.6)), url(${imgSrc})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={`w-61.25 h-fit gap-y-0 bg-snackly-blue/30 rounded-r1 flex flex-col items-center object-cover object-center`}
        >
          <span className="font-bold text-t3">{offers[offer].name}</span>
          <span className="font-bold text-h5">{offers[offer].offer}+</span>
          <span className="font-bold text-t3">videos</span>
          <Button />
        </div>
      </div>
      {isPopular ? (
        <span className="m-auto text-t5 px-5 py-1.5 bg-snackly-purple rounded-r3">
          le plus populaire
        </span>
      ) : (
        <></>
      )}
    </article>
  );
}
