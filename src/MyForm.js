import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { AddPosts } from './actions/posts'
import FileBase64 from 'react-file-base64';
import { connect } from 'react-redux';



export class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            message: "",
            img_url: null
        };
        this.handleChange = this.handleChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {


        e.preventDefault();

        console.log(this.props.submitPost(this.state))
        alert("added");
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }

    getFiles(file) {
        this.setState({
            ...this.state,
            img_url: file.base64
        })

        console.log(this.state.img_url)
    }
    render() {
        return (
            <Container className="Form-main p-0" style={{ marginTop: "15px" }}>
                <Form onSubmit={this.onSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Title :</Form.Label>
                        <Form.Control name="title" type="text" placeholder="Enter title:" onChange={this.handleChange} />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContent">
                        <Form.Label>Content :</Form.Label>
                        <Form.Control as="textarea" row={5} placeholder="Content" name="message" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select Image :</Form.Label>
                        <FileBase64
                            multiple={false}
                            onDone={this.getFiles.bind(this)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>

            </Container>
        )
    }
}


const mapDispatchToProps = {

    submitPost: AddPosts
}

const mapStateToProps = (store) => {
    return store;

}
export default connect(mapStateToProps, mapDispatchToProps)(MyForm)
