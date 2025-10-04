import React from "react";
import { Link, useLoaderData } from "react-router";

const Post = () => {
  const postData = useLoaderData();
//   console.log(postData)

  return (
    <div>
      <h2>Post container</h2>
      <h2>Posts {postData.length}</h2>
      {postData.map((post) => (
          <div key={post.id} style={{border:"2px solid green"}}>
          <h2>{post.title}</h2>
            <Link to={`/post-details/${post.id}`}><button>Show Details</button></Link>
        </div>
      ))}

     
    </div>
  );
};

export default Post;
