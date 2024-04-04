import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);

  return (
    <footer
      className={`py-5 font-sans text-center ${
        theme === "light" ? "bg-lightMode" : "bg-darkMode"
      } `}
    >
      <p
        className={`text-sm ${
          theme === "light" ? "text-darkMode" : "text-lightMode"
        } md:text-xl`}
      >
        © 2024,{" "}
        {locale === "id" ? "Dibuat dengan 🔥🌾 oleh " : "Made with 🔥🌾 by "}{" "}
        <Link
          to="https://github.com/Azzaxy1"
          className={`font-medium ${
            theme === "light"
              ? "text-darkMode hover:text-primary"
              : "text-lightMode hover:text-primary"
          }`}
        >
          Abdurrohman Azis
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
