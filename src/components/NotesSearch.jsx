import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const NotesSearch = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);

  const onSearchChangeEventHandler = (e) => {
    keywordChange(e.target.value);
  };

  return (
    <div className="text-center">
      <form className="m-auto mt-5">
        <input
          type="text"
          placeholder={locale === "id" ? "Cari Catatan..." : "Search Notes..."}
          className=" w-[90%] md:w-[96%] rounded-sm border-darkMode px-2 py-3 outline-secondary"
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
