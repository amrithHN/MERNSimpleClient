import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePost } from './actions/posts'

export class ViewPost extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        let { _id } = this.props.location.state;
        console.log(typeof (_id));
        this.props.delete_post(_id);

        const { history } = this.props

        history.push("/");


    }

    render() {
        let { _id, title, message, img_url, date } = this.props.location.state;
        return (

            < Container className="ViewPost" style={{ marginTop: "10px" }}>
                {console.log(_id)}
                < Card className="shadow-lg" style={{ width: '100%', margin: 0, padding: 0 }}>
                    <Card.Img variant="top p-2 shadow-sm" style={{
                        width: "100%",
                        objectFit: "cover",
                        margin: "0",
                        minHeight: "100px",
                        maxHeight: "400px",
                        padding: 0
                    }} src={img_url} alt="image" />
                    <h4 className="date" style={{ position: "relative", bottom: "10vh", left: "5%", color: "#FFFFFF" }}>Added on : {date}</h4>
                    <Card.Body>
                        <h2 style={{ fontWeight: "bold", marginBottom: 10, padding: 10 }}>{title}</h2>
                        <h4 style={{ padding: 10 }}>  {message}</h4>

                    </Card.Body>
                    <Card.Footer>
                        <Button type="button" className="btn btn-danger" style={{ margin: 10 }} onClick={this.handleDelete}>Delete</Button>
                        <Button>Edit</Button>
                    </Card.Footer>
                </Card >
            </Container >
        )
    }
}

const mapDispatchToProps = {
    delete_post: deletePost

};

const mapStateToProps = (store) => {
    return store;
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPost))
