import React, { Component } from 'react';
import { firestore } from '../firebase';
import { collectIdsAndDocs } from '../utilities';
import Authentication from './Authentication';

import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  }

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={this.state.user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;