import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Blog from "../container/blog";
import Home from "../pages/home";
// import Data from "../api/Data";

// const fetchBlogData = (id) => {
//   return [...Data.filter((blog) => blog.id === id)];
// };

// this file will contain all central routes
const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blogs/:id" exact render={(props) => <Blog {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;

// {
//   /* Passing history props to a route along with extra props  */
// }
// {
//   /* <Route
//         path="/home/blogs/:id"
//         render={(props) => <Blog name="nirav" {...props} />}
//       /> */
// }
