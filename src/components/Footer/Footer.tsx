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
  entityName = "Snackly",
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
            <h2 className="text-t3 font-bold">Politique</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={policy} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t3 font-bold">Services</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={services} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t3 font-bold">Nos entites</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={entities} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t3 font-bold flex flex-col items-center">
              Nos reseaux
            </h2>
            <ul className="flex gap-7.5">
              <IconsList icons={media} />
            </ul>
          </div>
        </div>
        <p className="text-t3 text-center p-5">
           © 2026 {entityName} - Une entité Play To Sky Group
        </p>
      </div>
    </footer>
  );
}
