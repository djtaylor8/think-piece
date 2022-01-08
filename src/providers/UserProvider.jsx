import React, { Component, createContext } from 'react';
import { createUserProfileDocument, auth } from '../firebase';

export const UserContext = createContext();

class UserProvider extends Component {
    state = { user: null }

    unsubscribe = null;

    componentDidMount = () => {
        this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
            const user = await createUserProfileDocument(userAuth);
            this.setState({ user });
        });
    };

    componentWillUnmount = () => {
        this.unsubscribe();
    }

    render() {
        const { user } = this.state;
        const { children } = this.props;

        return (
            <UserContext.Provider value={user}>{children}</UserContext.Provider>
        )
    }
}

export default UserProvider;