// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Trash2 } from "lucide-react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <>
      <Trash2 className="cursor-pointer" onClick={() => onDelete(id)} />
    </>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
