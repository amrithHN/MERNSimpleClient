import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import MyForm from './MyForm'

export class AddPost extends Component {
    render() {
        return (
            <Container className="AddPost m-t-5" >
                <h4 className="title" style={{ marginTop: "15px" }}>Add post</h4>
                <MyForm />

            </Container>
        )
    }
}

export default AddPost
