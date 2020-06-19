import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import state from "./redux/state";
import { createComment } from './redux/state';

export let renderDom = () => {
    ReactDOM.render(
        <App state={state} createComment={createComment} />, 
        document.querySelector('#root')
    );
}