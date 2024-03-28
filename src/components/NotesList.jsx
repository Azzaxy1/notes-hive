// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

import NotesItems from "./NotesItems";

const NotesList = ({ notes, onDelete, onArchive, isArchived }) => {
  const filteredNotes = isArchived
    ? notes.filter((note) => note.archived)
    : notes.filter((note) => !note.archived);

  return (
    <div className="flex flex-col items-center justify-center pt-10 md:items-start md:gap-2 md:flex-row">
      <div className="w-full px-4 my-3 rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-3xl text-center">
          {isArchived ? "Archive Notes" : "Active Notes"}
        </h1>
        {filteredNotes.length ? (
          filteredNotes.map((note) => {
            return (
              <NotesItems
                key={note.id}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note}
              />
            );
          })
        ) : (
          <p className="text-center">
            {isArchived ? "No archived records" : "No active records"}
          </p>
        )}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
      ]).isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default NotesList;
