import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import state, { subscribe } from "./redux/state";
import { createComment, updateCommentText } from './redux/state';

let renderDom = () => {
    ReactDOM.render(
        <App 
            state={state} 
            createComment={createComment} 
            updateCommentText={updateCommentText}
        />, 
        document.querySelector('#root')
    );
}

renderDom()

subscribe(renderDom);