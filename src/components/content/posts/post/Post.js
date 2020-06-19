import React from "react";
// import {createComment} from './../../../../redux/state';

const Post = (props) => {

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
    
    return (
        <div className="post-content">
            <img src="images/post-images/1.jpg" alt="post-image" className="img-responsive post-image" />
            <div className="post-container">
                <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                    <div className="user-info">
                        <h5><a href="timeline.html" className="profile-link">{props.name}</a> 
                        <span className="following">following</span>
                        </h5>
                        <p className="text-muted">Published a photo about {props.published} ago</p>
                    </div>
                    <div className="reaction">
                        <a className="btn text-green"><i className="icon ion-thumbsup"></i> {props.likes}</a>
                        <a className="btn text-red"><i className="fa fa-thumbs-down"></i> {props.dislikes}</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                        <p>{props.text} 
                        <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i>
                        </p>
                    </div>

                    { props.comments ? renderComments(props.comments) : '' }

                    <div className="post-comment">
                        <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                        <input ref={comment} value="qwe" type="text" className="form-control" placeholder="Post a comment" />
                        <button onClick={() => props.createComment(comment, props.comments)} className="btn btn-primary pull-right">Publish</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post;