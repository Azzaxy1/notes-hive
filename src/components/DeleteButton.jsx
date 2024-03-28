import React from "react";
import PropTypes from "prop-types";
import { Trash2 } from "lucide-react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <>
      <Trash2
        className="text-red-400 cursor-pointer size-8 hover:text-red-500 "
        onClick={() => onDelete(id)}
      />
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
