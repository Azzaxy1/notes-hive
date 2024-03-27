import React from "react";
import PropTypes from "prop-types";

import NotesItems from "./NotesItems";

const NotesList = ({ getInitialData, onDelete, onArchive }) => {
  const activeNotes = getInitialData.filter((note) => !note.archived);
  const archivedNotes = getInitialData.filter((note) => note.archived);

  return (
    <div className="flex flex-col items-center justify-center pt-10 md:items-start md:gap-2 md:flex-row">
      <div className="px-4 my-3 w-full md:w-[50%] rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Active</h1>
        {activeNotes.length ? (
          activeNotes.map((note) => {
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
          <p className="text-center"> No active records</p>
        )}
      </div>
      <div className="px-4 my-3 w-full md:w-[50%] rounded-lg pb-7 bg-primary">
        <h1 className="pb-3 text-center">Archive</h1>
        {archivedNotes.length ? (
          archivedNotes.map((note) => {
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
          <p className="text-center">No archived records</p>
        )}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  getInitialData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
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
};

export default NotesList;
