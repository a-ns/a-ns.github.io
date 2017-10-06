import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Menu, Grid } from "semantic-ui-react";
import FaGithub from "react-icons/lib/fa/github";
import FaLinkedin from "react-icons/lib/fa/linkedin";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

class Header extends React.Component {
  state = {};

  handleLinkClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const activeItem = this.state.activeItem;
    const leftItems = ["home", "profile", "projects"];
    return (
      <Menu color="blue" inverted>
        <Menu.Menu position="left">
          {leftItems.map(item => {
            let toLink = "/";
            if (item !== "home") toLink += item;
            return (
              <Link to={toLink} key={item}>
                <Menu.Item
                  as="div"
                  key={item}
                  name={item}
                  onClick={this.handleLinkClick}
                  active={activeItem === item}
                >
                  {item}
                </Menu.Item>
              </Link>
            );
          })}
        </Menu.Menu>

        <Menu.Menu position="right">
          <a href="http://github.com/a-ns" target="_blank">
            <Menu.Item as="div" name="Github">
              <FaGithub />
            </Menu.Item>
          </a>
          <a
            href="http://linkedin.com/in/alex-lindemann-0b11b1141"
            target="_blank"
          >
            <Menu.Item as="div" name="LinkedIn">
              <FaLinkedin />
            </Menu.Item>
          </a>
        </Menu.Menu>
      </Menu>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
