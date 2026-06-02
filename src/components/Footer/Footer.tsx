import type { FooterProp } from "../../types/FooterProp";
import { entityList } from "../../utils/constants/entity";
import { mediaList } from "../../utils/constants/media";
import Logo from "../Logo/Logo";
import IconsList from "./IconsList";
import ItemsList from "./ItemsList";
export default function Footer({
  policy,
  services,
  entities = entityList,
  media = mediaList,
  //   entityName = "Snackly",
  color = "bg-snackly-purple",
}: FooterProp) {
  return (
    <footer
      className={`flex ${color} text-white items-center justify-center py-12.5`}
    >
      <div className="flex flex-col gap-4 items-center">
        <Logo />
        <div className="flex md:max-lg:gap-x-5 max-mdp:flex-col max-mdp:gap-y-15 lg:gap-x-25 py-12.5">
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">Politique</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={policy} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">Services</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={services} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">Nos entites</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={entities} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold flex flex-col items-center">
              Nos reseaux
            </h2>
            <ul className="flex gap-7.5">
              <IconsList icons={media} />
            </ul>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="mt-8 flex justify-center items-center gap-3 text-t4 font-regular text-white/60 tracking-normal">
          <span>created by</span>
          <img src="/images/visuance.png" alt="Visuance logo" className="h-4" />
          <span>&</span>
          <img
            src="/images/play-to-sky.png"
            alt="Play To Sky logo"
            className="h-6"
          />
        </div>
      </div>
    </footer>
  );
}
