import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesApp from "./components/NotesApp";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesApp />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
