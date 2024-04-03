import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import reactIcon from "./assets/react.png";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailNotePages from "./pages/DetailNotePage";
import AddNotePage from "./pages/AddNotePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import WrapperArchivedPage from "./pages/ArchivedPage.jsx";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext.js";
import { LocaleProvider } from "./contexts/LocaleContext.js";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("locale") || "id";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };

  // const [authedUser, setAuthedUser] = useState(null);

  // if (authedUser === null) {
  //   return (
  //     <main className="relative min-h-screen font-sans bg-primary">
  //       <div className="absolute top-5 right-3 md:right-10 ">
  //         <img
  //           src={reactIcon}
  //           alt="react icon"
  //           width={200}
  //           className="w-20 md:w-32"
  //         />
  //       </div>
  //       <div className="absolute bottom-5 left-3 md:left-10 ">
  //         <img
  //           src={reactIcon}
  //           alt="react icon"
  //           width={200}
  //           className="w-20 md:w-32"
  //         />
  //       </div>
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path="/*" element={<p>Halaman Login</p>} />
  //           <Route path="/register" element={<p>Halaman Register</p>} />
  //         </Routes>
  //       </BrowserRouter>
  //     </main>
  //   );
  // }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{ locale, toggleLocale }}>
        <BrowserRouter>
          <main
            className={`relative min-h-screen font-sans ${
              theme === "light" ? "bg-lightMode" : "bg-darkMode"
            }`}
          >
            <div className="absolute top-5 right-3 md:right-10 ">
              <img
                src={reactIcon}
                alt="react icon"
                width={200}
                className="w-20 md:w-32"
              />
            </div>
            <div className="absolute bottom-5 left-3 md:left-10 ">
              <img
                src={reactIcon}
                alt="react icon"
                width={200}
                className="w-20 md:w-32"
              />
            </div>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailNotePages />} />
              <Route path="/notes/archived" element={<WrapperArchivedPage />} />
              <Route path="/notes/new" element={<AddNotePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                },
              }}
            />
          </main>
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
