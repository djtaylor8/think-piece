import React, { Component } from 'react';
import Post from './Post';
import Comments from './Comments';

import { firestore } from '../firebase';
import { collectIdsAndDocs, withRouter } from '../utilities';


class PostPage extends Component {
    state = { post: null, comments: [] };

    render() {
        console.log(this.props);
        return (
            <div>
                Post page!
            </div>
        );
    }
}

export default withRouter(PostPage);