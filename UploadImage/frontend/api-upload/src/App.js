import React from "react";
import uploadImg from "./component/UploadImg";
import showImg from "./component/ShowImg";
import home from "./component/Home";
import "./App.css";
import { Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <switch>
          <Route exact path="/" component={home} />
          <Route exact path="/upload" component={uploadImg} />
          <Route exact path="/list" component={showImg} />
        </switch>
      </div>
    );
  }
}
export default App;
