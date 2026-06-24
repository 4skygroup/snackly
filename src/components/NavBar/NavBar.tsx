import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "../Language/ToggleLanguage";

interface SubItem {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  external?: boolean;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "header.group", path: "https://www.playtosky.com/", external: true },
  {
    label: "header.offers",
    path: "",
    subItems: [
      { label: "Acting", path: "/acting" },
      { label: "Motion", path: "/motion" },
    ],
  },
  { label: "header.contact", path: "/contact" },
];

const navItemsMobile: NavItem[] = [
  { label: "header.group", path: "https://www.playtosky.com/", external: true },
  {
    label: "header.locations",
    path: "/locations",
  },
  {
    label: "header.offers",
    path: "",
    subItems: [
      { label: "Acting", path: "/acting" },
      { label: "Motion", path: "/motion" },
    ],
  },
  { label: "header.contact", path: "/contact" },
];

export default function Navbar({ color }: { color?: string }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  // const [languagesOpen, setLanguagesOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mobileLanguagesOpen, setMobileLanguagesOpen] =
    useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const timeout2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t, i18n } = useTranslation();
  const [languages, setLanguages] = useState([
    {
      language: "English",
      label: "en",
      active: false,
    },
    {
      language: "Français",
      label: "fr",
      active: true,
    },
  ]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  // const handleMouseEnterLanguage = () => {
  //   if (timeout2Ref.current) clearTimeout(timeout2Ref.current);
  //   setLanguagesOpen(true);
  // };
  // const handleMouseLeaveLanguage = () => {
  //   timeout2Ref.current = setTimeout(() => setLanguagesOpen(false), 150);
  // };

  return (
    <nav
      className={`relative w-full ${color ? color : "bg-snackly-purple"} flex items-center justify-between px-8 pt-8 pb-8 max-sm:justify-end`}
    >
      {/* Logo */}

      <ul className="hidden md:flex items-center gap-10">
        {/* <div
          className="relative text-white"
          onMouseEnter={handleMouseEnterLanguage}
          onMouseLeave={handleMouseLeaveLanguage}
        >
          <span className="uppercase flex items-center justify-center gap-1">
            {languages.filter((lang) => lang.active)[0].label}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${languagesOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          {languagesOpen && (
            <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-snackly-purple border border-white/10 rounded-md py-2 w-44 shadow-lg z-10">
              {languages.map((lang) => (
                <li
                  key={lang.language}
                  className={`block px-4 py-2 font-glacial text-t6 transition-colors duration-200 text-white hover:text-gray-white hover:bg-white/5`}
                  onClick={() => {
                    i18n.changeLanguage(lang.label);
                    setLanguages(
                      languages.map((language) => {
                        if (language.label === lang.label) {
                          return { ...language, active: true };
                        }
                        return { ...language, active: false };
                      }),
                    );
                  }}
                >
                  {lang.language}
                </li>
              ))}
            </ul>
          )}
        </div> */}
        <NavLink to="/locations">
          <svg
            className=""
            width="20"
            height="27"
            viewBox="0 0 20 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.30327 0.0134938C8.06613 0.150709 7.35841 0.29848 6.55886 0.588743C4.44112 1.36454 2.66914 2.78418 1.46441 4.67881C0.329905 6.46788 -0.194127 8.7847 0.0651878 10.8535C0.486574 14.1836 2.91765 18.775 6.94783 23.8625C7.89865 25.0658 9.12499 26.5066 9.40592 26.7546C9.77868 27.0818 10.2325 27.0818 10.6052 26.7546C10.8862 26.5066 12.1125 25.0658 13.0633 23.8625C16.6883 19.2869 19.0168 15.1283 19.7515 11.8984C19.9406 11.0699 20 10.5316 20 9.66605C19.9946 7.13284 18.9573 4.71047 17.0827 2.88445C15.5376 1.36981 13.717 0.456805 11.5723 0.113767C11.0645 0.0346044 9.67063 -0.0287262 9.30327 0.0134938ZM10.6377 4.89518C12.6528 5.15906 14.3221 6.57343 14.8677 8.47861C15.0136 8.97997 15.0676 9.98797 14.9812 10.5368C14.7273 12.099 13.6792 13.4711 12.1935 14.1783C11.3184 14.5952 10.4216 14.7536 9.50856 14.6533C8.79545 14.5741 8.43349 14.4738 7.81762 14.1783C6.33196 13.4711 5.28389 12.099 5.02998 10.5368C4.94354 9.98797 4.99757 8.97997 5.14343 8.47861C5.81873 6.12484 8.20119 4.56798 10.6377 4.89518Z"
              fill="white"
            />
          </svg>
        </NavLink>

        <ToggleLanguage />
      </ul>

      <NavLink
        to="/"
        // className="shrink-0"
        className="shrink-0 absolute -translate-x-1/2 left-1/2"
      >
        <Logo />
      </NavLink>

      {/* ── Desktop nav ── */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map(({ label, path, external, subItems }) => (
          <li
            key={label}
            className="relative"
            onMouseEnter={subItems ? handleMouseEnter : undefined}
            onMouseLeave={subItems ? handleMouseLeave : undefined}
          >
            {external ? (
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="font-glacial text-t5 text-white hover:text-gray-white transition-colors duration-200"
              >
                {t(`${label}`)}
              </a>
            ) : (
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `font-glacial text-t5 transition-colors duration-200 flex items-center gap-1 ${
                    isActive
                      ? "text-gray-white"
                      : "text-white hover:text-gray-white"
                  }`
                }
              >
                {t(`${label}`)}
                {subItems && (
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            )}

            {/* Dropdown desktop */}
            {subItems && servicesOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-snackly-purple border border-white/10 rounded-md py-2 w-44 shadow-lg z-10">
                {subItems.map((sub) => (
                  <li key={sub.path}>
                    <NavLink
                      to={sub.path}
                      onClick={() => setServicesOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 font-glacial text-t6 transition-colors duration-200 ${
                          isActive
                            ? "text-gray-white"
                            : "text-white hover:text-gray-white hover:bg-white/5"
                        }`
                      }
                    >
                      {sub.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50 relative ${menuOpen ? "invisible" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* ── Mobile menu — ── */}
      <div
        className={`fixed inset-0 bg-snackly-purple md:hidden flex flex-col transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        {/* Croix de fermeture */}
        <button
          className="absolute top-5 right-8 text-white text-3xl font-light leading-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
        >
          ✕
        </button>

        {/* Logo centré */}
        <div className="flex justify-center mt-16 mb-12">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <Logo />
          </NavLink>
        </div>

        {/* Items centrés */}
        <ul className="flex flex-col items-center gap-8 flex-1">
          {navItemsMobile.map(({ label, path, external, subItems }) => (
            <li key={path} className="text-center">
              {external ? (
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="font-glacial text-t3 text-white"
                >
                  {t(`${label}`)}
                </a>
              ) : subItems ? (
                <div>
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="font-glacial text-t3 text-white flex items-center gap-2 mx-auto"
                  >
                    {t(`${label}`)}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <ul
                    className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-3 ${mobileServicesOpen ? "max-h-40 mt-4" : "max-h-0"}`}
                  >
                    {subItems.map((sub) => (
                      <li key={sub.path}>
                        <NavLink
                          to={sub.path}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="font-glacial text-t3 text-white/80 hover:text-white transition-colors duration-200"
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <NavLink
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="font-glacial text-t3 text-white"
                >
                  {t(`${label}`)}
                </NavLink>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => setMobileLanguagesOpen((prev) => !prev)}
              className="font-glacial text-t3 text-white flex items-center gap-2 mx-auto uppercase"
            >
              {languages.filter((lang) => lang.active)[0].label}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileLanguagesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <ul
              className={`overflow-hidden transition-all duration-300 flex flex-col items-center gap-3 ${mobileLanguagesOpen ? "max-h-40 mt-4" : "max-h-0"}`}
            >
              {languages.map((lang) => (
                <li
                  key={lang.language}
                  className={`block px-4 py-2 font-glacial text-t4 transition-colors duration-200 text-white hover:text-gray-white hover:bg-white/5 cursor-pointer`}
                  onClick={() => {
                    i18n.changeLanguage(lang.label);
                    setLanguages(
                      languages.map((language) => {
                        if (language.label === lang.label) {
                          return { ...language, active: true };
                        }
                        return { ...language, active: false };
                      }),
                    );
                    setMenuOpen(false);
                  }}
                >
                  {lang.language}
                </li>
              ))}
            </ul>
          </li>
        </ul>

        {/* Mention en bas */}
        <p className="text-center text-white/50 text-t5 pb-8 font-glacial">
          A Play To Sky Group Entity
        </p>
      </div>
    </nav>
  );
}
