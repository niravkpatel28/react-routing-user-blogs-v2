// main home page
import React from "react";
import Data from "../api/Data";
import BlogCard from "../components/blog-card.component";
import Header from "../components/header";
import "./home.style.css";
// render all blog components
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
    };
  }

  componentDidMount() {
    this.setState({
      blogData: [...Data],
    });
  }

  navigateOnClick(event) {
    console.log(event.target);
  }
  render() {
    console.log(this.state.blogData);
    return (
      <div>
        <Header />
        <div className="blog-card-display">
          {this.state.blogData.map((blog) => {
            return (
              <BlogCard
                key={blog.id}
                id={blog.id}
                blogData={blog} // data can be sent to the rendered prop
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
