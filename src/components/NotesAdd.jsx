import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import ThemeContext from "../contexts/ThemeContext";
import { LocaleConsumer } from "../contexts/LocaleContext";

export class NotesAdd extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxTitleLength: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onNotesInputHandler = this.onNotesInputHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    const inputTitle = e.target.value;
    const remainingChars = this.state.maxTitleLength - inputTitle.length;
    if (remainingChars >= 0) {
      this.setState({
        title: inputTitle,
        remainingChars: remainingChars,
      });
    }
  }

  onNotesInputHandler(e) {
    this.setState(() => {
      return {
        body: e.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    const { title, body } = this.state;
    this.props.addNotes({
      title,
      body,
    });

    toast.success("Data successfully added!");
  }

  render() {
    // TODO : mengganti input deskripsi sesuai warna

    return (
      <LocaleConsumer>
        {({ locale }) => (
          <form onSubmit={this.onSubmitEventHandler} className="flex flex-col">
            <h2 className="text-xl md:text-2xl">
              {locale === "id" ? "Tambahkan Catatan" : "Add Note"}
            </h2>
            <h3 className="py-2 pr-3 text-end">
              {locale === "id" ? "Sisa Karakter " : "Remaining Chars "} :{" "}
              {this.state.remainingChars}
            </h3>
            <input
              className={`px-2 py-3 mb-3 text-base rounded-sm ${
                this.context === "light"
                  ? "text-lightMode border-lightMode"
                  : "text-darkMode border-darkMode"
              } outline-secondary`}
              type="text"
              placeholder="Redux Toolkit"
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
              required
            />
            <div className="mb-3 border-2 border-solid bg-lightMode">
              <div
                className={`h-40 px-2 py-2 overflow-auto text-base  rounded-sm placeholder:text-black outline-none`}
                contentEditable
                value={this.state.body}
                onInput={this.onNotesInputHandler}
              />
            </div>
            <button
              type="submit"
              className="py-2 text-lg bg-[#1a80af] hover:bg-[#378eb6] text-white border-none rounded-lg cursor-pointer"
            >
              {locale === "id" ? "Simpan" : "Save"}
            </button>
          </form>
        )}
      </LocaleConsumer>
    );
  }
}

NotesAdd.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesAdd;
