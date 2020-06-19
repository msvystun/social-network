import React from "react";
import Posts from './posts/Posts.js'
import CreatePost from './posts/CreatePost.js'
import Dialogs from './dialogs/Dialogs.js';
import { Route } from "react-router-dom";
import Suggestion from "./suggestion/Suggestion.js";
import Sidebar from "../sidebar/Sidebar.js";
import SideNav from "../sidebar/SideNav.js";
//nfn - function
//clg - console log
//exp - exportdefault
// cmmb - comment

//imr - import react from react
//rcc build all rce



const Content = (props) => {
    return (
        <div id="page-contents">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 static">
                        <div className="profile-card">
                            <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
                            <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                            <a href="#" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
                        </div>
                        <SideNav />
                        <Sidebar />
                    </div>
                    <div className="col-md-7">
                        <CreatePost />
                        <Route path="/posts" render={ () => <Posts posts={props.posts} createComment={props.createComment} updateCommentText={props.updateCommentText} /> } />
                        <Route path="/dialogs" component={() => <Dialogs dialogsData={props.dialogsData} />} />
                    </div>
                    
                    <Suggestion />
                </div>
            </div>
        </div>
    )
}

export default Content;