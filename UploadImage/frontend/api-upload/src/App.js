import React from "react";
import uploadImg from "./component/UploadImg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <switch>
          <Route exact path="/upload" component={uploadImg} />
        </switch>
      </div>
    );
  }
}
export default App;
