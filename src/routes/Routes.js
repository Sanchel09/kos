import React, { Component } from "react";
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardTemplate from "../components/DashboardTemplate";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard/*" element={<DashboardTemplate />} />
      </Switch>
    );
  }
}

export default Routes;
