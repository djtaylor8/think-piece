import React, { Component } from 'react';
import { auth, firestore } from '../firebase';

class UserProfile extends Component {
    state = { displayName: '' };
    imageInput = null;

    get uid() {
        return auth.currentUser.uid;
    }

    get userRef() {
        return firestore.doc(`users/${this.uid}`);
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { displayName } = this.state;

        if (displayName) {
            this.userRef.update({ displayName });
        }
    }
    render() {

    return (
        <div>
            
        </div>
    );
  };
};

export default UserProfile;