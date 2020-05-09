import React from "react";
// import Data from "../api/Data";
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
    };
  }

  // getDerivedStateFromProps is used to initialize the blogData
  // value from props. This prop is the history object which contains
  // location, match and other relevant information used for navigation
  // This becomes important because the blog information has to change
  // based on change in the url.
  // A change in blogData will rerender the application page.
  // once the Blog component is rendered, componentDidMount( ) will not be
  // called. This is because it is called only once on first mount.

  static getDerivedStateFromProps(nextProps) {
    return {
      blogData: nextProps.location.state.blogData,
    };
  }

  // ComponentDidMount( ) will render the blog upon first mounting phase.
  // the data for blogData is sent within the props.
  // there are two path, Home--> Blog
  // via the side panel Related Link --> Blog
  // in both the cases data is passed via props
  // to make use of map( ) functionality the received data is stored in form of an array

  componentDidMount() {
    this.setState({
      blogData: [...this.props.location.state.blogData],
    });
  }

  render() {
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
export default Blog;
