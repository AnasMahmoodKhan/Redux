import React from "react";
import { useDispatch } from "react-redux";
import { deleteNote, toggleFavorite } from "../../store/actions/noteAction";
import moment from "moment";
import { Link } from "react-router-dom";
const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };

  const toggleFavoriteHandler = () => {
    dispatch(toggleFavorite(note));
  };

  const editNoteHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };

  return (
    <div className="note white">
      <div className="right-align">
        <i
          className="material-icons red-text"
          style={{ cursor: "pointer" }}
          onClick={toggleFavoriteHandler}
        >
          {note.favorite ? "favorite" : "favorite_border"}
        </i>{" "}
        &nbsp;
        <i
          className="material-icons"
          style={{ cursor: "pointer" }}
          onClick={deleteNoteHandler}
        >
          delete
        </i>
        &nbsp;
        <Link to={`/editform/${note.id}`}>
          <i
            className="material-icons black-text"
            style={{ cursor: "pointer" }}
            onClick={editNoteHandler}
          >
            edit
          </i>
        </Link>
      </div>
      <Link to={"/note/" + note.id}>
        <h5 className="black-text">{note.title}</h5>
      </Link>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
    </div>
  );
};

export default Note;
