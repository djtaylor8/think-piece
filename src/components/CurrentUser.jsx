import React from "react";
import { auth } from "../firebase";

import { Link } from "react-router-dom";

import moment from "moment";

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  const signout = () => {
    auth.signOut();
  };
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <Link to="/profile">
            <h2>{displayName}</h2>
          </Link>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt.toDate()).calendar()}</p>
        </div>
      </div>
      <div>
        <div>{children}</div>
        <button onClick={() => signout()}>Sign Out</button>
      </div>
    </section>
  );
};

export default CurrentUser;
