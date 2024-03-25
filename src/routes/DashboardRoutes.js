import React, { Component } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import GroupPage from "../pages/GroupPage";
import ErrorPage from "../pages/ErrorPage";

class DashboardRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/groupPage" element={<GroupPage />} />
        <Route path="*" Component={ErrorPage} />
      </Switch>
    );
  }
}

export default DashboardRoutes;
