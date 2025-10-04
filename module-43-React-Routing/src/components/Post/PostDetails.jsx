import React from 'react';
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    // console.log(post)
    return (
        <div>
            <h2>post Details</h2>
            <h2>User Id: {post.userId} Id: {post.id}</h2>
            <h3>Title : {post.title}</h3>
            <p>Post Body : {post.body}</p>
            <Link to={"/post"} ><button>Back</button></Link>
        </div>
    );
};

export default PostDetails;