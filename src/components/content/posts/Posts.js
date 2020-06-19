import React from "react";
import Post from './post/Post';

const Posts = (props) => {
    
    let post = props.posts.map((post, i) => {
        return <Post
                    post={post}
                    newComment={post.newComment}
                    createComment={props.createComment}
                    updateCommentText={props.updateCommentText}
                    key={i}
                />
    });

    return (
        <div>
            {post}
        </div>
    )
}

export default Posts;