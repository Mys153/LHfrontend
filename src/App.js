import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./container/home";
import Addnewherb from "./component/addnewherb";
import Editherb from "./component/editherb";
import Allherb from "./component/allherb";


class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allherb" component={Allherb}/>
        <Route exact path="/addnewherb" component={Addnewherb}/>
        <Route exact path="/editherb/" component={Editherb} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }

}

export default App;
