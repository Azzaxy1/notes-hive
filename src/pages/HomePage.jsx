import React from "react";
// import NotesAdd from "./NotesAdd";
// import reactIcon from "../assets/react.png";

import { getAllNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import NotesSearch from "../components/NotesSearch";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      search: "",
      archivedNotes: [],
    };

    // this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  // onAddNotesHandler({ title, body, archived }) {
  //   this.setState((prevState) => {
  //     return {
  //       notes: [
  //         ...prevState.notes,
  //         {
  //           id: `${+new Date()}`,
  //           title: title,
  //           body: body,
  //           createdAt: new Date().toISOString(),
  //           archived: archived,
  //         },
  //       ],
  //     };
  //   });
  // }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onSearchHandler(e) {
    this.setState({
      search: e,
    });
  }

  onArchiveHandler(id) {
    this.setState((prevNote) => ({
      notes: prevNote.notes.map((note) => {
        if (note.id == id) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    }));
  }

  render() {
    const filterSearch = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <main className="min-h-screen py-28">
          <section className=" px-8 md:p-5 m-auto border-dashed rounded-md border-3 w-[60%]">
            {/* <NotesAdd addNotes={this.onAddNotesHandler} /> */}
            <NotesSearch onSearch={this.onSearchHandler} />
            <NotesList
              notes={filterSearch}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchiveHandler}
            />
          </section>
        </main>
      </>
    );
  }
}

export default HomePage;
