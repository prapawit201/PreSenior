import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
const baseUrl = "http://localhost:5000";

class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEmployee: {},
      accountId: "",
      fName: "",
      lName: "",
      username: "",
      password: "",
      position: "",
      enterpriseId: "",
    };
  }
  componentDidMount() {
    let userId = this.props.match.params.accountId;
    const url = baseUrl + "/employee/get/" + userId;
    axios
      .get(url)
      .then((res) => {
        if (res.data.success) {
          console.log(userId);
          const data = res.data.data[0];
          this.setState({
            dataEmployee: data,
            fName: data.fName,
            lName: data.lName,
            username: data.username,
            position: data.position,
          });
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server " + error);
      });
  }
  render() {
    return (
      <div>
        <div class="form-row justify-content-center">
          <div class="form-group col-md-6">
            <label for="inputPassword4">fName</label>
            <input
              type="text"
              class="form-control"
              placeholder="fName"
              value={this.state.fName}
              onChange={(value) => this.setState({ fName: value.target.value })}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">lName</label>
            <input
              type="text"
              class="form-control"
              placeholder="lName"
              value={this.state.lName}
              onChange={(value) => this.setState({ lName: value.target.value })}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">username</label>
            <input
              type="text"
              class="form-control"
              placeholder="username"
              value={this.state.username}
              onChange={(value) =>
                this.setState({ username: value.target.value })
              }
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">position</label>
            <input
              type="text"
              class="form-control"
              placeholder="position"
              value={this.state.position}
              onChange={(value) =>
                this.setState({ position: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => this.sendUpdate()}
        >
          Update
        </button>
      </div>
    );
  }
  sendUpdate() {
    //  get parameter id
    let userId = this.props.match.params.accountId;
    // url de backend
    const baseUrl = "http://localhost:5000/employee/update/" + userId;
    // parametros de datos post
    const datapost = {
      fName: this.state.fName,
      lName: this.state.lName,
      username: this.state.username,
      position: this.state.position,
    };

    axios
      .post(baseUrl, datapost)
      .then((response) => {
        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}

export default EditComponent;
