import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Button({ isHome }: { isHome?: boolean }) {
  const { t } = useTranslation();
  return (
    <Link to="/contact">
      <button className="cursor-pointer text-t5 text-snackly-blue font-bold bg-white px-7.5 py-3.75 rounded-2xl">
        {isHome ? t("home.cta") : t("cta")}
      </button>
    </Link>
  );
}
