import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Showimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      imageError: null,
    };
  }
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    axios
      .get("http://localhost:8001/list")
      .catch((error) => {
        this.setState({ personError: "404 Error" });
      })
      .then((res) => {
        console.log(res);
        if (res && res.data && res.data.data) {
          const data = res.data.data;
          this.setState({ image: data });
        }
      });
    {
      this.loadFillData();
    }
  };
  // loadFillData() {
  //   return this.state.image.map((data) => {
  //     return (
  //       <tr>
  //         <th>{data.imageId}</th>
  //         <td>{data.imageName}</td>
  //         <td>
  //           <img src={`http://localhost:8001${data.imageName}`} />
  //         </td>
  //         <td>hello</td>
  //       </tr>
  //     );
  //   });
  // }
  render() {
    return (
      <div>
        <thead class="thead-dark">
          <tr>
            <th>first-name</th>
            <th>last-name</th>
            <th>position</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <Link class="btn btn-outline-info" to="/">
          Back
        </Link>
        {this.loadFillData()}
      </div>
    );
  }
  loadFillData() {
    return this.state.image.map((data) => {
      return (
        <div>
          {" "}
          <tr>
            <th>{data.imageId}</th>
            <td>{data.imageName}</td>
            <td>
              <img src={`http://localhost:8001/${data.imageName}`} />
            </td>
          </tr>
        </div>
      );
    });
  }
}
export default Showimg;
