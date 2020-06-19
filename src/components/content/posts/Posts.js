import React from "react";
import Post from './post/Post';

const Posts = (props) => {
    
    let post = props.posts.map((post, i) => {
        return <Post 
                    name={post.name} 
                    published={post.published} 
                    likes={post.likes}
                    dislikes={post.dislikes}
                    text={post.text}
                    comments={post.comments}
                    key={i}
                    createComment={props.createComment}
                />
    });

    return (
        <div>
            {post}
        </div>
    )
}

export default Posts;