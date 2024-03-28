import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import reactIcon from "./assets/react.png";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DetailNotePages from "./pages/DetailNotePage";
import AddNotePage from "./pages/AddNotePage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <main className="relative min-h-screen font-sans bg-primary">
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" element={<DetailNotePages />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontWeight: "bold",
              fontFamily: "sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </main>
  );
}

export default App;
