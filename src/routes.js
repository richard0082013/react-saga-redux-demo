import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./containers/App";
import Home from "./components/HomePage";
import Library from "./containers/MediaGalleryPage";

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/library" component={Library} />
    </Switch>
  </App>
);

export default Routes;
