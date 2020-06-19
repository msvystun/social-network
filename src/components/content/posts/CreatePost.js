import React from "react";

const CreatePost = () => {

    let postTextarea = React.createRef();
    
    const addPost = () => {
        console.log('abc', postTextarea.current.value)
    }
    
    return (
        <div className="create-post">
            <div className="row">
                <div className="col-md-7 col-sm-7">
                    <div className="form-group">
                        <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                        <textarea name="texts" ref={postTextarea} cols="30" rows="1" className="form-control" placeholder="Write what you wish"></textarea>
                    </div>
                </div>
                <div className="col-md-5 col-sm-5">
                    <div className="tools">
                        <ul className="publishing-tools list-inline">
                        <li><a href="#"><i className="ion-compose"></i></a></li>
                        <li><a href="#"><i className="ion-images"></i></a></li>
                        <li><a href="#"><i className="ion-ios-videocam"></i></a></li>
                        <li><a href="#"><i className="ion-map"></i></a></li>
                        </ul>
                        <button onClick={() => addPost()} className="btn btn-primary pull-right">Publish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;