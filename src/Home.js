import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Posts from './Posts'


export class Home extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Container className="Blog" style={{ marginTop: 10, padding: 10 }}>
                <h4>Posts</h4>
                <Posts />

            </Container>

        )
    }
}

export default Home
