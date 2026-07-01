import type { FooterProp } from "../../types/FooterProp";
import { entityList } from "../../utils/constants/entity";
import { mediaList } from "../../utils/constants/media";
import Logo from "../Logo/Logo";
import IconsList from "./IconsList";
import { useTranslation } from "react-i18next";
import ItemsList from "./ItemsList";
import CreatedBy from "./CreatedBy";
export default function Footer({
  policy,
  services,
  entities = entityList,
  media = mediaList,
  //   entityName = "Snackly",
  color = "bg-snackly-purple",
}: FooterProp) {
  const { t } = useTranslation();
  return (
    <footer
      className={`flex ${color} text-white items-center justify-center py-12.5`}
    >
      <div className="flex flex-col gap-4 items-center">
        <Logo />
        <div className="flex md:max-lg:gap-x-5 max-mdp:flex-col max-mdp:gap-y-15 lg:gap-x-25 py-12.5">
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">{t("footer.titles.policy")}</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={policy} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">{t("footer.titles.services")}</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={services} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold">{t("footer.titles.entities")}</h2>
            <ul className="flex flex-col gap-5">
              <ItemsList items={entities} withBlanckTarget={true} />
            </ul>
          </div>
          <div className="flex flex-col gap-8.75 max-mdp:gap-y-5">
            <h2 className="text-t4 font-bold flex flex-col items-center">
              {t("footer.titles.media")}
            </h2>
            <ul className="flex gap-7.5 justify-center">
              <IconsList icons={media} />
            </ul>
          </div>
        </div>
        {/* COPYRIGHT */}
        <CreatedBy />
      </div>
    </footer>
  );
}
