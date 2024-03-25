import React, { Component } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardTemplate from "../components/Dashboard/DashboardTemplate";
import ErrorPage from "../pages/ErrorPage";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard/*" element={<DashboardTemplate />} />
        <Route path="*" Component={ErrorPage} />
      </Switch>
    );
  }
}

export default Routes;
