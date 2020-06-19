import React from "react";

const Sidebar = () => {
    return (
        <div id="chat-block">
            <div className="title">Chat online</div>
            <ul className="online-users list-inline">
                <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="images/users/user-3.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="John Doe"><img src="images/users/user-4.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="images/users/user-5.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="James Carter"><img src="images/users/user-6.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="images/users/user-7.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="images/users/user-8.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Anna Young"><img src="images/users/user-9.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="images/users/user-10.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
            </ul>
        </div>
    )
}

export default Sidebar;