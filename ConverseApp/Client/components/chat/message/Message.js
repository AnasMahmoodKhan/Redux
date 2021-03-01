import React from "react";
import moment from "moment";

const Message = ({ message: { name, user_id, text, createdAt }, current_uid }) => {
  let oldDate = new Date(createdAt);
    let created = moment(oldDate);
  let isCurrentUser = user_id === current_uid ? true : false;
  return (
    <React.Fragment>
      {isCurrentUser ? (
        <div className="row msg_container base_sent">
          <div className="col-md-10 col-xs-10">
            <div className="messages msg_sent">
              <p>
                {text}
              </p>
              <time dateTime={createdAt}>{name} • {moment(created.toDate()).fromNow()}</time>
            </div>
          </div>
          <div className="col-md-2 col-xs-2 avatar">
            <img
              src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
              alt="user-avatar"
              className=" img-responsive "
            />
          </div>
        </div>
      ) : (
        <div className="row msg_container base_receive">
          <div className="col-md-2 col-xs-2 avatar">
            <img
              src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
              alt="user-avatar"
              className=" img-responsive "
            />
          </div>
          <div className="col-md-10 col-xs-10">
            <div className="messages msg_receive">
              <p>
                {text}
              </p>
              <time dateTime={createdAt}>{name} • {moment(created.toDate()).fromNow()}</time>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Message;
