import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, isLoaded, useFirestoreConnect } from "react-redux-firebase";
import moment from "moment";

const NotesDetail = (props) => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: "notes", doc: id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[id]
  );
  console.log(note)
  const noteMarkup = !isLoaded(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Loading...</span>
        </div>
      </div>
    </div>
  ) : isEmpty(note) ? (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">The Note Content is Empty</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{note?.title}</span>
          <p>{note?.content}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          
          <div>{moment(note?.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
  );

  return (
    noteMarkup 
  );
};

export default NotesDetail;
