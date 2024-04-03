import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

import { deleteNote, getAllNotes, unarchiveNote } from "../utils/local-data";
import NotesList from "../components/NotesList";
import NotesSearch from "../components/NotesSearch";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

const ArchivedPage = () => {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await getAllNotes();
  //     setNotes(data);
  //   };

  //   fetchData();
  // });

  useEffect(() => {
    setNotes(getAllNotes());
    const title = searchParams.get("title");
    setKeyword(title || "");
  }, [searchParams]);

  const onDeleteHandler = (id) => {
    const updatedNotes = deleteNote(id);
    setNotes(updatedNotes);

    toast.success("Data successfully deleted");
  };

  const onSearchHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ title: keyword });
  };

  const onArchiveHandler = (id) => {
    const updatedNotes = unarchiveNote(id);
    setNotes(updatedNotes);

    toast.success("Data successfully updated");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

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
          {locale === "id" ? "Catatan Terarsip" : "Archived Notes"}
        </h1>
        <NotesSearch keyword={keyword} keywordChange={onSearchHandler} />
        <NotesList
          notes={filteredNotes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          isArchived={true}
        />
      </div>
    </section>
  );
};

export default ArchivedPage;
