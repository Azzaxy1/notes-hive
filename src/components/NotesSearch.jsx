import React from "react";
import PropTypes from "prop-types";

export class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(e) {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="text-center">
        <form className="m-auto mt-5">
          <input
            type="text"
            placeholder="Search..."
            className=" w-[90%] md:w-[96%] rounded-sm border-none px-2 py-3 outline-secondary"
            onChange={this.onSearchChangeEventHandler}
          />
        </form>
      </div>
    );
  }
}

NotesSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NotesSearch;
