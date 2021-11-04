import React from "react";
import UseInput from "../../customHook/UseInput";

export default function form() {
  const [title, bindTitle, resetTitle] = UseInput();
  const [content, bindContent, resetContent] = UseInput();

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    resetTitle();
    resetContent();
  };
  return (
    <div className="section">
      <form onSubmit={handlerSubmit} className="white">
        <h5 className="grey-text">New Note</h5>
        <div className="input-field col s12">
          <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note_title">
            Note title
          </label>
          <div className="input-field">
            <textarea
              id="note_description"
              className="materialize-textarea"
              {...bindContent}
            ></textarea>
            <label htmlFor="note_description">Note Content</label>
          </div>
          <button className="btn green">Submit</button>
        </div>
      </form>
    </div>
  );
}
