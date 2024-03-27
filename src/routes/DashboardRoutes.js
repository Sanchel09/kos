import React, { Component } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import GroupPage from "../pages/GroupPage";
import ErrorPage from "../pages/ErrorPage";
import MembersPage from "../pages/MembersPage";
import InstructorPage from "../pages/InstrutorPage";

class DashboardRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/groupPage" element={<GroupPage />} />
        <Route path="/membersPage" element={<MembersPage />} />
        <Route path="/instructorPage" element={<InstructorPage />} />
        <Route path="*" Component={ErrorPage} />
      </Switch>
    );
  }
}

export default DashboardRoutes;
