import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";

export default function NotesList ({ notes, handleDelete }) {
  return (
      <div>
        {notes.length
          ? notes.map(note => (
              <Note key={note.id} note={note} handleDelete={handleDelete} />
            ))
          : null}
      </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  handleDelete: PropTypes.func.isRequired
};