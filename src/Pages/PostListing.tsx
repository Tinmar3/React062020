import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

interface State {
    posts: Array<any>
}

class PostListing extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(`https://vue-tutorial-44271.firebaseio.com/posts.json`)
            .then(res => {
                const data = res.data;
                console.log(data);
                const postsArray = [];
                for (const key in res.data) {
                    postsArray.push({ ...res.data[key], id: key });
                }
                this.setState({ posts: postsArray })
            })
    }

    render() {
        return (
            <div>
                <h1>POSTS</h1>
                {this.state.posts.map(post => <Link to={'post/' + post.id} key={post.id}>{post.title}</Link>)}
            </div>
        );
    }
}

export default PostListing;