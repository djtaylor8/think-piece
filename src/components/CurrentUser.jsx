import React from 'react';
import { auth } from '../firebase'

import moment from 'moment';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {

  const signout = () => {
    auth.signOut();
  }
  return (
    <section className="CurrentUser">
      <div className="CurrentUser--profile">
        {photoURL && <img src={photoURL} alt={displayName} />}
        <div className="CurrentUser--information">
          <h2>{displayName}</h2>
          <p className="email">{email}</p>
          <p className="created-at">{moment(createdAt).calendar()}</p>
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