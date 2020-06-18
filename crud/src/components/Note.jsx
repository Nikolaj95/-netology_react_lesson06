import React from "react";
import PropTypes from "prop-types";
import Delete from "../delete.png"

export default function Note ({ note, handleDelete }) {
  return (
      <div className='note'>
          <button className='btn-close' onClick={() => handleDelete(note.id)}>
              <img src={Delete} alt=""/>
          </button>
          <div>{note.content}</div>
      </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    handleDelete: PropTypes.func
  })
};