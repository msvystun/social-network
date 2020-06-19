import React from "react";
// import {createComment} from './../../../../redux/state';

const Post =  (props) => {

    let renderComments = (comments) => {
        return comments.map((comment, i) => {
            return (
                <div key={i}>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                        <img src={comment.userImage} alt="" className="profile-photo-sm" />
                        <p><a href="timeline.html" className="profile-link">{comment.name}</a> {comment.text}</p>
                    </div>
                </div>
            )
        });
    }

    let comment = React.createRef();

    let addComment = () => {
        let commentText = comment.current.value;
        props.createComment(commentText, props.post.comments);
        props.newComment.text = '';
    }

    let newCommentText = () => {
        let updatedCommentText = comment.current.value;
        props.updateCommentText(updatedCommentText, props.post);
    }

    return (
        <div className="post-content">
            <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
            <div className="post-container">
                <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                    <div className="user-info">
                        <h5><a href="timeline.html" className="profile-link">{props.post.name}</a> 
                        <span className="following">following</span>
                        </h5>
                        <p className="text-muted">Published a photo about {props.post.published} ago</p>
                    </div>
                    <div className="reaction">
                        <a className="btn text-green"><i className="icon ion-thumbsup"></i> {props.post.likes}</a>
                        <a className="btn text-red"><i className="fa fa-thumbs-down"></i> {props.post.dislikes}</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                        <p>{props.post.text} 
                        <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i>
                        </p>
                    </div>

                    { props.post.comments ? renderComments(props.post.comments) : '' }

                    <div className="post-comment">
                        <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                        <input ref={comment} onChange={newCommentText} value={props.newComment.text} type="text" className="form-control" placeholder="Post a comment" />
                        <button onClick={addComment} className="btn btn-primary pull-right">Publish</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;