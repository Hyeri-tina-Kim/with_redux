import React, { Component } from 'react';
import {
    Container,
    Menu,
} from 'semantic-ui-react'

class Header extends Component {

    render() {

        return (
            <div className="container">
                <Menu>
                    <Container>
                        <Menu.Item as='a' header href="/"> 여행가자 </Menu.Item>
                        <Menu.Item as='a' href="/mypage"> MY PAGE </Menu.Item>
                        <Menu.Item as='a'> write </Menu.Item>
                    </Container>
                </Menu>

            </div>
        )
    }
}

export default Header;