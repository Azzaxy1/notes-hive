// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const NotesSearch = ({ keyword, keywordChange }) => {
  const onSearchChangeEventHandler = (e) => {
    keywordChange(e.target.value);
  };

  return (
    <div className="text-center">
      <form className="m-auto mt-5">
        <input
          type="text"
          placeholder="Search..."
          className=" w-[90%] md:w-[96%] rounded-sm border-none px-2 py-3 outline-secondary"
          value={keyword}
          onChange={onSearchChangeEventHandler}
        />
      </form>
    </div>
  );
};

NotesSearch.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesSearch;
