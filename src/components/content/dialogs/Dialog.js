import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
    
    return (
        <li className="active">
            <NavLink to={props.link} data-toggle="tab">
                <div className="contact">
                    <img src={props.image} alt="" className="profile-photo-sm pull-left"/>
                    <div className="msg-preview">
                        <h6>{props.name}</h6>
                        <p className="text-muted">{props.message}</p>
                    <small className="text-muted">{props.time}</small>
                    { props.unreaded ? <div className="chat-alert">{props.unreaded}</div> : null }
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default Dialog;