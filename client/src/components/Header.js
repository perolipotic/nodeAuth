import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./HeaderStyle.css"

class Header extends React.Component {
  renderLinks() {
    if (this.props.auth) {
      return (
        <>
          <Link to="/feature">Feature</Link>
          <Link to="/signout">Sign Out</Link>
        </>
      );
    }
      return (
        <>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </>
      );
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
