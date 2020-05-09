import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./sidePanel.style.css";
import Data from "../api/Data";

// the function filters the relevant blog data using the blog it.
// this is trying to simulate making an API call to remote server
// the data is sent as an array to allow rendering using map()
const fetchBlogData = (id) => Data.filter((blog) => blog.id === id);

const SidePanel = (props) => (
  <div className="sticky-panel">
    <h1> Related Links </h1>
    {props.relatedLinks.map((link) => (
      <>
        <Link
          to={{
            pathname: `/blogs/${link.id}`,
            state: { blogData: fetchBlogData(link.id) }, // sending blogData
          }}
          className="create-link "
        >
          {" "}
          {link.title}
        </Link>
        <hr />
      </>
    ))}
  </div>
);

export default withRouter(SidePanel);

// <Link
// id={props.id}
// to={{
//   pathname: `/home/blogs/${props.id}`,
//   state: { blogData: props.data },
// }}
// >
// {" "}
// {props.title}
// </Link>

// const SidePanel = (props) => (
//   <div>
//     <h1> Related Links </h1>
//     {props.relatedLinks.map((link) => (
//       <Link to={`/home/blogs/${link.id}`} className="create-link ">
//         {" "}
//         {link.title}
//       </Link>
//     ))}
//   </div>
// );
