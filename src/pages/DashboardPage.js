import {
  faChalkboardTeacher,
  faLaptopCode,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import AppButton from "../components/AppButton";
import moment from "moment";

class DashboardPage extends Component {
  state = {
    summary: [
      { name: "Students", count: 450 },
      { name: "Instructors", count: 50 },
      { name: "Projects", count: 660 },
    ],
    groupProgress: [
      {
        groupName: "Group A",
        progress: "75%",
      },
      {
        groupName: "Group B",
        progress: "50%",
      },
      {
        groupName: "Group C",
        progress: "90%",
      },
      {
        groupName: "Group D",
        progress: "60%",
      },
    ],
    events: [
      {
        title: "Group A Project Discussion",
        date: "2015-02-10T10:12:50.500Z",
      },
      {
        title: "Group A Project Submission Deadline",
        date: "2015-02-10T10:12:50.500Z",
      },
      {
        title: "Semi Annual Meeting and Project Discussion",
        date: "2015-02-10T10:12:50.500Z",
      },
    ],
  };

  displayIcons = (idx) => {
    switch (idx) {
      case 0:
        return faUsers;
      case 1:
        return faChalkboardTeacher;
      case 2:
        return faLaptopCode;
      default:
        return faUser;
    }
  };

  render() {
    return (
      <div className="container-fluid customMargin">
        <div className="row">
          {this.state.summary.length > 0
            ? this.state.summary.map((item, idx) => {
                return (
                  <div className="col-md-4" key={idx}>
                    <div className="dataContainerBox summaryBox">
                      <div>
                        <p className="contentTitle">{item.name}</p>
                        <p className={`summaryCount summaryColor${idx}`}>
                          {item.count}
                        </p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={this.displayIcons(idx)}
                          className={`summaryIcons summaryColor${idx}`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="dataContainerBox">
              <p className="contentTitle">Group Progress</p>
              {this.state.groupProgress.length > 0 ? (
                this.state.groupProgress.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <div className="d-flex justify-content-between">
                        <p className="progressTitle">{item.groupName}</p>
                        <p className={`progressCount countColor${idx}`}>
                          {item.progress}
                        </p>
                      </div>
                      <div class={`progress progressBgColor${idx}`}>
                        <div
                          class={`progress-bar progressColor${idx}`}
                          role="progressbar"
                          style={{ width: item.progress }}
                          aria-valuenow={item.progress}
                        ></div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No group progress recorded yet.</p>
              )}
              <div className="d-flex justify-content-end">
                <AppButton name="View All" customStyle="btnColorSecondary" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="dataContainerBox">
              <p className="contentTitle">Event Calendar</p>
              {this.state.events.length > 0
                ? this.state.events.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="d-flex align-items-center"
                        style={{ marginBottom: "0.75rem" }}
                      >
                        <div className="eventDateBox">
                          <p className="eventDateMonth">
                            {moment(item.date).format("MMM")}
                          </p>
                          <p className="eventDate">
                            {moment(item.date).format("D")}
                          </p>
                        </div>
                        <div>
                          <p className="progressTitle">{item.title}</p>
                          <p className="eventTime">
                            {moment(item.date).format("ddd h:mm a")}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : null}
              <div className="d-flex justify-content-end">
                <AppButton name="View All" customStyle="btnColorSecondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
