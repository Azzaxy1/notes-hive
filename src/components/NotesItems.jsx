import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";

import { showFormattedDate } from "../utils/index";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

const NotesItems = ({ id, title, body, createdAt, onDelete, onArchive }) => {
  return (
    <div className="flex flex-col gap-6 text-white">
      <article className="px-5 py-4 mb-3 bg-secondary rounded-e-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h3 className="mb-1 text-xl font-semibold underline-offset-4">
          <Link to={`/notes/${id}`} className="text-white">
            {title}
          </Link>
        </h3>
        <p className="pt-1 pb-3 font-thin text-gray-400">
          {showFormattedDate(createdAt)}
        </p>
        <p className="font-medium">{parser(body)}</p>
        <div className="flex justify-end gap-2 pt-4 ">
          <ArchiveButton id={id} onArchive={onArchive} />
          <DeleteButton id={id} onDelete={onDelete} />
        </div>
      </article>
    </div>
  );
};

NotesItems.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
    .isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NotesItems;
