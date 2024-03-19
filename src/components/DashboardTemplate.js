import React, { Component } from "react";
import DashboardRoutes from "../routes/DashboardRoutes";

class DashboardTemplate extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <DashboardRoutes />
      </div>
    );
  }
}

export default DashboardTemplate;
