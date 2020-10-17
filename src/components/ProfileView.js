import React, { Component } from 'react';
import {
    Header,
    Icon
} from 'semantic-ui-react'

class ProfileView extends Component {

    render() {

        return (
            <div className="profileBox">
                <Icon name='user circle outline' size='massive' />
                <div style={{padding: '20px'}}>
                    <Header as="h1"> 강신학 </Header>
                    <span className="mr-10">post : 20</span>
                    <span>like : 20</span>
                </div>
            </div >
        )
    }
}

export default ProfileView;