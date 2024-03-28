// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";
import { CircleArrowLeft } from "lucide-react";

const DetailNotePages = () => {
  const { id } = useParams();
  const note = getNote(id);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 mx-auto font-sans bg-primary">
      <header className="relative w-[70%] text-center">
        <Link to="/">
          <CircleArrowLeft className="absolute top-0 left-0 text-secondary " />
        </Link>
        <h1 className="mb-4 text-3xl font-semibold">Note Detail</h1>
      </header>
      <section className="w-2/3 text-white rounded-2xl bg-secondary p-7">
        {note ? (
          <div>
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-gray-400">{showFormattedDate(note.createdAt)}</p>
            <p className="mt-4">{note.body}</p>
          </div>
        ) : (
          <p className="text-xl">Note not found.</p>
        )}
      </section>
    </main>
  );
};

export default DetailNotePages;
