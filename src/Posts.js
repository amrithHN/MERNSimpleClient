import React, { Component } from 'react'
import Post from './Post'
import { connect } from 'react-redux';
import { fetchPosts } from './actions/posts'



export class Posts extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this.props.fetch_all();

    }


    componentDidUpdate() {

        this.props.fetch_all();

    }

    render() {
        let { data } = this.props.myreducer;
        return (
            <div className="Posts flex row gap-5 justify-content-evenly" style={{ marginTop: 20, marginBottom: 20 }}>

                {data ? data.map((value, _id) => (<Post key={_id} data={value}></Post>)) : null}

            </div>
        )
    }
}

const mapDispatchToProps = {
    fetch_all: fetchPosts

};

const mapStateToProps = (store) => {
    return store;
};



export default connect(mapStateToProps, mapDispatchToProps)(Posts)
