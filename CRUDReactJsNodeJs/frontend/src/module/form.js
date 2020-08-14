import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
class EditComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      username: "",
      password: "",
      position: "",
      enterpriseId: 0,
    };
  }
  render() {
    return (
      <div>
        <div class="form-row ">
          <div class="form-group col-md-6">
            <label for="inputEmail4">fName</label>
            <input
              type="fName"
              class="form-control"
              placeholder="fName"
              value={this.state.fName}
              onChange={(value) => this.setState({ fName: value.target.value })}
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">lName</label>
            <input
              type="lName"
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
              type="username"
              class="form-control"
              placeholder="username"
              value={this.state.username}
              onChange={(value) =>
                this.setState({ username: value.target.value })
              }
            />
          </div>

          <div class="form-group col-md-6">
            <label for="inputEmail4">password</label>
            <input
              type="password"
              class="form-control"
              placeholder="password"
              value={this.state.password}
              onChange={(value) =>
                this.setState({ password: value.target.value })
              }
            />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">position</label>
            <input
              type="position"
              class="form-control"
              placeholder="position"
              value={this.state.position}
              onChange={(value) =>
                this.setState({ position: value.target.value })
              }
            />
          </div>
          <div class="form-group col-md-6">
            <label for="input enterpriseId">enterpriseId</label>
            <input
              type="text"
              class="form-control"
              id="input enterpriseId"
              placeholder=""
              value={this.state.enterpriseId}
              onChange={(value) =>
                this.setState({ enterpriseId: value.target.value })
              }
            />
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => this.sendSave()}
        >
          Save
        </button>
      </div>
    );
  }
  sendSave() {
    /// por si no ha seleccionado nada de role
    if (this.state.position == 0) {
      alert("Seleccione el tipo de position");
    } else if (this.state.username == "") {
      alert("Digite el campo de username");
    } else if (this.state.fName == "") {
      alert("Digite el campo de fName");
    } else if (this.state.lName == "") {
      alert("Digite el campo de lName");
    } else if (this.state.enterpriseId == "") {
      alert("Digite el campo de enterpriseId");
    } else if (this.state.password == "") {
      alert("Digite el campo de password");
    } else {
      // url de backend
      const baseUrl = "http://localhost:5000/employee/create";

      // parametros de datos post
      const datapost = {
        fName: this.state.fName,
        lName: this.state.lName,
        username: this.state.username,
        password: this.state.password,
        position: this.state.position,
        enterpriseId: this.state.enterpriseId,
      };

      axios
        .post(baseUrl, datapost)
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          alert("Error 304 " + error);
        });
    }
  }
}

export default EditComponent;
