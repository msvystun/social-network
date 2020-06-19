import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = (params) => {
    return (
        <ul className="nav-news-feed">
            <li><i className="icon ion-ios-paper"></i><div><NavLink to="/posts">My Newsfeed</NavLink></div></li>
            <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
            <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
            <li><i className="icon ion-chatboxes"></i><div><NavLink to="/dialogs">Messages</NavLink></div></li>
            <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
            <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
        </ul>
    )
}

export default SideNav;