import React, { Component } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react'

class PostListView extends Component {

    render() {

        return (
            <div className="myPostBox">
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='/images/wireframe/image1.jpg' size="medium"/>
                            <Icon name='heart outline' size='large' color="grey"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image2.jpg' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image3.jpg' size="medium"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Image src='/images/wireframe/image1.jpg' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image2.jpg' size="medium"/>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src='/images/wireframe/image3.jpg' size="medium"/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default PostListView;