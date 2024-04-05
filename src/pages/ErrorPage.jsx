import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

const Error = () => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`min-h-screen ${
        theme === "light" ? "bg-lightMode" : "bg-darkMode"
      } place-content-center`}
    >
      <section
        className={`flex flex-col items-center justify-center space-y-8 ${
          theme === "light" ? "text-darkMode" : "text-lightMode"
        }`}
      >
        <h1 className="font-semibold text-8xl">Oops!</h1>
        <p className="text-lg font-semibold">
          404{" "}
          {locale === "id" ? "Halaman Tidak Ditemukan" : "Page Not Found..."}
        </p>
        <p className="font-semibold ">
          <Link
            to="/"
            className={`
          ${theme === "light" ? "text-darkMode" : "text-lightMode"}
        } hover:text-primary`}
          >
            {locale === "id" ? "Kembali ke Halaman Utama" : "Back to Home"}
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Error;
