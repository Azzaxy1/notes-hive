// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

const DetailNotePages = () => {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto font-sans bg-primary">
      <div className="border-dashed  rounded-md border-3 w-[70%] flex py-3 md:py-10 border-slate-900 flex-col items-center justify-center ">
        <header className=" w-[70%] text-center">
          <h1 className="mb-4 text-3xl font-semibold">Note Detail</h1>
        </header>
        <section className="w-2/3 text-white rounded-e-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-secondary p-7">
          {note ? (
            <div>
              <h2 className="text-xl font-semibold">{note.title}</h2>
              <p className="text-gray-400">
                {showFormattedDate(note.createdAt)}
              </p>
              <p className="mt-4">{note.body}</p>
            </div>
          ) : (
            <p className="text-xl">Note not found.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default DetailNotePages;
