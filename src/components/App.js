import React from "react";
import Header from "./Header";
import Content from "./content/Content";
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Content dialogsData={props.state.dialogsPage.dialogsData} posts={props.state.posts} createComment={props.createComment} />
                <Footer />
                <div id="spinner-wrapper">
                    <div className="spinner"></div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;