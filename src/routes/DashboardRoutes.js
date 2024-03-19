import React, { Component } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";

class DashboardRoutes extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" element={<DashboardPage />} />
      </Switch>
    );
  }
}

export default DashboardRoutes;
