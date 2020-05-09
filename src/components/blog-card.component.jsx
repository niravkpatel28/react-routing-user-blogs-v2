import React from "react";
import { Link } from "react-router-dom";
import "./blog-card.css";

const BlogCard = (props) => (
  // this onClick mechanism can be used to make the div clickable.
  // onClickCapture will  capture any event within the div and
  // using the props.history.push( ) one can redirect the navigation to
  // different URL
  // <div className="card" onClickCapture={props.onClick}>

  // the code below simply makes use of <Link> component which will
  // do the redirection.
  // The <Link> component sends data to the child component using state object
  // this state object is stored in props.location.state ...
  // any data that needs to be sent to the page can be sent using this method.
  // In this application state contains data for rendering a single page
  // entire blog data is sent as a prop and it is stored in an Array.
  <div className="card" onClickCapture={props.onClick}>
    <Link
      id={props.blogData.id}
      to={{
        pathname: `/blogs/${props.blogData.id}`,
        state: { blogData: [props.blogData] },
      }}
      className="blog-links"
    >
      {" "}
      {props.blogData.title}
    </Link>
    <img src={props.blogData.imageUrl} alt="blogImage" />
    <p>{props.blogData.author}</p>
  </div>
);

export default BlogCard;

// const BlogCard = (props) => (
//   <div className="card" onClickCapture={props.onClick}>
//     <Link
//       id={props.id}
//       to={{
//         pathname: `/home/blogs/${props.id}`,
//         state: { blogData: props.blogData },
//       }}
//     >
//       {" "}
//       {props.title}
//     </Link>
//     <img src={props.imageUrl} alt="blogImage" />
//     <p>{props.author}</p>
//   </div>
// );

// export default BlogCard;
