import React, { Component } from 'react';
import ProfileView from './ProfileView';
import PostListView from './PostListView';

class MyPage extends Component {

    render() {

        return (
            <div className="container">
                <ProfileView/>
                <PostListView/>
            </div>
        )
    }
}

export default MyPage;