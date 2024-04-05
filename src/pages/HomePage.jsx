import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import NotesList from "../components/NotesList";
import NotesSearch from "../components/NotesSearch";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    const title = searchParams.get("title");
    return title || "";
  });
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);

    toast.success("Data successfully deleted");
  };

  const onSearchHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ title: keyword });
  };

  const onArchiveHandler = async (id) => {
    await archiveNote(id);

    const { data } = await getActiveNotes();
    setNotes(data);

    toast.success("Data successfully updated");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Data sedang dimuat...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen py-28">
      <div
        className={` px-8 md:p-5 m-auto border-dashed rounded-md ${
          theme === "light" ? "border-darkMode" : "border-lightMode"
        } border-3 w-[60%]`}
      >
        <h1
          className={`pb-3 text-3xl text-center ${
            theme === "light" ? "text-darkMode" : "text-lightMode"
          }`}
        >
          {locale === "id" ? "Catatan Aktif" : "Active Notes"}
        </h1>
        <NotesSearch keyword={keyword} keywordChange={onSearchHandler} />
        <NotesList
          notes={filteredNotes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          isArchived={false}
        />
      </div>
    </section>
  );
};

export default HomePage;
