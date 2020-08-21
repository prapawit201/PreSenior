import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <Link class="btn btn-outline-warning" to="/upload">
        Go Upload
      </Link>
    );
  }
}
export default Home;
