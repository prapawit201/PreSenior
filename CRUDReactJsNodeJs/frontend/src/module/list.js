import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link, Switch } from "react-router-dom";

class listComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployee: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/employee/list")
      .then((res) => {
        const data = res.data.data;
        this.setState({ listEmployee: data });
      })
      .catch((error) => {
        alert(error);
      });
    {
      this.loadFillData();
    }
  }
  loadFillData() {
    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <button class="btn btn-outline-info "> Edit </button>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table class="table table-hover table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Admin</td>
            <td>John Smitth</td>
            <td>jhonsmith@mail.com</td>
            <td>California</td>
            <td>317785847</td>
            <td>
              <button class="btn btn-outline-info "> Edit </button>
            </td>
            <td>
              <button class="btn btn-outline-danger "> Delete </button>
            </td>
          </tr>
          {this.loadFillData()}
        </tbody>
      </table>
    );
  }
  loadFillData() {
    return this.state.listEmployee.map((data) => {
      return (
        <tr>
          <th>{data.accountId}</th>
          <td>{data.fName}</td>
          <td>{data.lName}</td>
          <td>{data.username}</td>
          <td>{data.position}</td>
          <td>{data.enterpriseId}</td>
          <td>
            <Link class="btn btn-outline-info " to={"/edit/" + data.accountId}>
              Edit
            </Link>
          </td>
          <td>
            <button class="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      );
    });
  }
}

export default listComponent;
