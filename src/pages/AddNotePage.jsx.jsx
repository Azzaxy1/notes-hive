import React from "react";
import { useNavigate } from "react-router-dom";

import { addNote } from "../utils/local-data";
import NotesAdd from "../components/NotesAdd";

const AddNotePage = () => {
  const navigate = useNavigate();

  const onAddNote = ({ title, body, archived }) => {
    addNote({
      title,
      body,
      archived,
    });
    navigate("/");
  };

  return (
    <main className="flex items-center justify-center min-h-screen py-12 mx-auto font-sans text-white lg:py-20 bg-primary">
      <div className="flex flex-col items-center w-[60%] justify-center py-3 border-dashed rounded-md border-3 md:py-6 border-slate-900 ">
        <header>
          <h1 className="mb-4 text-3xl font-semibold text-slate-800">
            New Note
          </h1>
        </header>
        <section className="w-[85%] rounded-e-xl  shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-secondary p-7">
          <NotesAdd addNotes={onAddNote} />
        </section>
      </div>
    </main>
  );
};

export default AddNotePage;
