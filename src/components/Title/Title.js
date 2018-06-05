import React from "react";
import "./Title.css";

const Title = props => (
    <div className="titlebox">
        <img className="sstitle" src='./img/Sesame-street-logo_(1).png'></img>
        <h1>Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
);
export default Title;