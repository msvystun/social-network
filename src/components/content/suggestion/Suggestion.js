import React from "react";

const Suggestion = (props) => {
    return (
        <div className="col-md-2 static">
            <div className="suggestions" id="sticky-sidebar">
                <h4 className="grey">Who to Follow</h4>
                <div className="follow-user">
                    <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">Diana Amber</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="images/users/user-12.jpg" alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">Cris Haris</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="images/users/user-13.jpg" alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">Brian Walton</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="images/users/user-14.jpg" alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">Olivia Steward</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
                <div className="follow-user">
                    <img src="images/users/user-15.jpg" alt="" className="profile-photo-sm pull-left" />
                    <div>
                    <h5><a href="timeline.html">Sophia Page</a></h5>
                    <a href="#" className="text-green">Add friend</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion;