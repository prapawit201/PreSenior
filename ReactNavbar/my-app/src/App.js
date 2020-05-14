import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Register from "./pages/register";
import Library from "./pages/library";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/library" component={Library} />
          {/* test */}
        </Switch>
      </div>
    );
  }
}

export default App;
