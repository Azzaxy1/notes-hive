import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { toggleLocale, locale } = useContext(LocaleContext);

  return (
    <header className="fixed top-0 left-0 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] right-0 z-50 flex items-center justify-between flex-col md:flex-row px-20 py-5 font-sans bg-secondary">
      <h1 className="text-3xl md:text-4xl">
        <Link to="/" className="text-white no-underline">
          {locale === "id" ? "Catatan Pribadi" : "Personal Notes"}
        </Link>
      </h1>
      <nav>
        <ul className="flex items-center justify-center gap-2 list-none md:gap-5">
          <li>
            <NavLink
              to="/"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              {locale === "id" ? "Home" : "Home"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes/archived"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              {locale === "id" ? "Arsip" : "Archived"}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notes/new"
              className="text-base text-white no-underline md:text-xl hover:text-primary hover:underline hover:underline-offset-8"
            >
              {locale === "id" ? "Buat" : "Create"}
            </NavLink>
          </li>

          <li>
            <button
              onClick={toggleLocale}
              className="text-base border-none cursor-pointer bg-secondary text-lightMode md:text-xl"
            >
              {locale === "id" ? "EN" : "ID"}
            </button>
          </li>
          <li>
            <button onClick={toggleTheme} className="border-none bg-secondary ">
              {theme === "light" ? (
                <Moon className="text-white cursor-pointer" />
              ) : (
                <Sun className="text-white cursor-pointer" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
