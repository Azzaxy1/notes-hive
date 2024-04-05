import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { addNote } from "../utils/network-data";
import NotesAdd from "../components/NotesAdd";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

const AddNotePage = () => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const onAddNote = async ({ title, body }) => {
    await addNote({
      title,
      body,
    });
    navigate("/");
  };

  return (
    <main
      className={`flex items-center justify-center min-h-screen py-12 mx-auto font-sans lg:py-20 ${
        theme === "light"
          ? "text-lightMode  bg-lightMode"
          : "text-darkMode bg-darkMode"
      }`}
    >
      <div
        className={`flex flex-col items-center w-[60%] justify-center py-3 border-dashed rounded-md border-3 md:py-6   ${
          theme === "light" ? "border-darkMode" : "border-lightMode"
        }`}
      >
        <header>
          <h1
            className={`mb-4 text-3xl font-semibold ${
              theme === "light" ? "text-darkMode" : "text-lightMode"
            }`}
          >
            {locale === "id" ? "Catatan Baru" : "New Note"}
          </h1>
        </header>
        <section
          className={`w-[85%] rounded-e-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-7 ${
            theme === "light" ? "bg-darkMode" : "bg-lightMode"
          }`}
        >
          <NotesAdd addNotes={onAddNote} />
        </section>
      </div>
    </main>
  );
};

export default AddNotePage;
