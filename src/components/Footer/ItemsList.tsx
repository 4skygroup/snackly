import type { LinkContent } from "../../types/LinkContent";
import { useTranslation } from "react-i18next";

export default function ItemsList({ items }: { items: LinkContent[] }) {
  const { t } = useTranslation();
  return (
    <>
      {items.map((link, index) => (
        <li key={index} className="text-snackly-gray text-t4">
          <a href={link.link}>{t(`${link.name}`)}</a>
        </li>
      ))}
    </>
  );
}
