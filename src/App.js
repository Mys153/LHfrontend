import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./container/home";
import Addnewherb from "./component/addnewherb";
import Editherb from "./component/editherb";
import Eachedit from "./component/eachedit";
import Allherb from "./component/allherb";
import Detailherb from "./component/detailherb";
import Addmore from "./component/addmore";


class App extends Component {
  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allherb" component={Allherb}/>
        <Route exact path="/addnewherb" component={Addnewherb}/>
        <Route exact path="/editherb/" component={Editherb} />
        <Route exact path="/editherb/:id" component={Eachedit} />
        <Route exact path="/detailherb/:id" component={Detailherb} />
        <Route exact path="/addnewherb/addmore" component={Addmore} />
      </Switch>
    );
  }

  render() {
    return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
  }

}

export default App;
