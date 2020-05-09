import React from "react";
// import { withRouter } from "react-router-dom";
import Data from "../api/Data";
import Title from "../components/title";
import BannerImage from "../components/bannerImage";
import Paragraph from "../components/paragraph";
import SidePanel from "../components/sidePanel";
import Header from "../components/header";

import "./blog.style.css";
class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogData: [],
      // currentId: props.match.params.id,// derived from history object
      // currentId: props.match.params.id,
    };
  }

  // updateBlogData = () => {
  //   let blogData = Data.filter((blog) => blog.id === this.state.currentId);
  //   this.setState({
  //     blogData: [...blogData],
  //   });
  // };
  static getDerivedStateFromProps(nextProps) {
    return {
      currentId: nextProps.match.params.id,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   this.state.blogData = Data.filter(
  //     // (blog) => blog.id === this.state.currentId
  //     (blog) => blog.id === this.props.match.id
  //   );
  //   // this.setState({
  //   //   blogData: [...blogData],
  //   // });
  //   return true;
  // }

  componentDidMount() {
    // this will simulate making api call to remote server to fetch only the object
    // with the currentId given be this.props.match.params.id

    let blogData = Data.filter(
      (blog) => blog.id === this.props.match.params.id
    );
    this.setState({
      blogData: [...blogData],
    });
  }

  render() {
    console.log("%%%%%%%%%%%% state", this.state);
    return (
      <div>
        {this.state.blogData.map((blog) => {
          return (
            <React.Fragment key={blog.id}>
              <Header />
              <div className="blog-elements">
                <div className="blog-content">
                  <Title title={blog.title} />
                  <BannerImage imageUrl={blog.imageUrl} />
                  <Paragraph body={blog.content} />
                </div>
                <div className="side-panel">
                  <SidePanel relatedLinks={blog.links} {...this.props} />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}
// export default withRouter(Blog);
export default Blog;
