import React from "react";
import "./paragraph.style.css";
const Paragraph = (props) => (
  <div className="blog-text">
    <p> {props.body} </p>
    <p> {props.body} </p>
    <p> {props.body} </p>
  </div>
);
export default Paragraph;
