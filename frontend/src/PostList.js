import React from 'react'
import axios from 'axios'
import './PostList.css'

class PostList extends React.Component {
    state = {
        posts: [],
        comments: []
    };

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
            const posts = res.data;
            this.setState({ posts });
        });

        axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
            const comments = res.data;
            this.setState({ comments });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron-div col s12">
                    <ul className="collection">
                        {this.state.posts.map(post =>
                            (
                                <div>
                                    <li
                                        key={post.id}
                                        className="collection-item left-align red lighten-3 cores1"
                                    >
                                        <h5>User ID: {post.id}</h5>
                                        <h4> {post.title} </h4>
                                        <p>Post: {post.body}</p>
                                    </li>
                                    <div className="jumbotron-div col s12">
                                        <ul className="collection">
                                            {
                                                this.state.comments.map(comment => (
                                                    <li 
                                                        key={comment.id}
                                                        className="collection-item left-align purple lighten-2 cores2"
                                                    >
                                                        <h6>User ID: {comment.id} {comment.email}</h6>
                                                        <p>Comentário: {comment.body}</p>
                                                    </li>
                                                )
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}



export default PostList