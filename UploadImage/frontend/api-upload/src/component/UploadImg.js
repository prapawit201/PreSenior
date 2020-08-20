import React, { useState } from "react";
import file from "file";
import axios from "axios";

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8001/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <img
          src="http://localhost:8001/1597941575793.png"
          alt="W3Schools.com"
          width="104"
          height="142"
        ></img>
        <input type="file" name="myImage" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default UploadImg;
