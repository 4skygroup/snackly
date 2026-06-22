import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";

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
  { label: "header.home", path: "/" },
  { label: "header.group", path: "https://www.playtosky.com/", external: true },
  {
    label: "header.locations",
    path: "https://www.playtosky.com/offices-by-region",
    external: true,
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [languagesOpen, setLanguagesOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [mobileLanguagesOpen, setMobileLanguagesOpen] =
    useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeout2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const handleMouseEnterLanguage = () => {
    if (timeout2Ref.current) clearTimeout(timeout2Ref.current);
    setLanguagesOpen(true);
  };
  const handleMouseLeaveLanguage = () => {
    timeout2Ref.current = setTimeout(() => setLanguagesOpen(false), 150);
  };

  return (
    <nav className="w-full bg-snackly-purple flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <NavLink to="/" className="shrink-0">
        <Logo />
      </NavLink>

      {/* ── Desktop nav ── */}
      <ul className="hidden md:flex items-center gap-10">
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
        <div
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
        </div>
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
          {navItems.map(({ label, path, external, subItems }) => (
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
                  className={`block px-4 py-2 font-glacial text-t4 transition-colors duration-200 text-white hover:text-gray-white hover:bg-white/5`}
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
