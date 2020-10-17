import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class PostListView extends Component {

    render() {

        return (
            <div className="myPostBox">
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image.png' size="medium"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PostListView;