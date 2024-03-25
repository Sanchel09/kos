import React, { Component } from "react";
import userImg from "../assets/images/userImg.jpg";
import userImg1 from "../assets/images/userImg2.jpg";
import GroupList from "../components/Group/GroupList";
import GroupMemberList from "../components/Group/GroupMemberList";

class GroupPage extends Component {
  state = {
    groupList: [
      {
        groupName: "Group A",
        instructor: {
          name: "John Doe",
          image: userImg,
        },
        leader: {
          name: "User 5",
          image: userImg1,
          phone: "+12984456",
          email: "abc@gmail.com",
        },
      },
      {
        groupName: "Group B",
        instructor: {
          name: "Jane Doe",
          image: userImg,
        },
        leader: {
          name: "User 1",
          image: userImg1,
          phone: "+12984456",
          email: "abc@gmail.com",
        },
      },
      {
        groupName: "Group C",
        instructor: {
          name: "Mr. Brown",
          image: userImg,
        },
        leader: {
          name: "John Doe",
          image: userImg1,
          phone: "+12984456",
          email: "abc@gmail.com",
        },
      },
    ],
    groupMembers: [
      {
        groupName: "Group B",
        members: [
          {
            name: "Suman",
            image: userImg,
            isActive: true,
            flagStatus: "Flag",
          },
          {
            name: "User 1",
            image: userImg1,
            isActive: true,
            flagStatus: "At risk",
          },
          ,
          {
            name: "John Doe",
            image: userImg,
            isActive: true,
            flagStatus: "Flag",
          },
        ],
      },
      {
        groupName: "Group A",
        members: [
          {
            name: "Jane Doe",
            image: userImg1,
            isActive: true,
            flagStatus: "Flag",
          },
          {
            name: "Avilash",
            image: userImg,
            isActive: false,
            flagStatus: "Flag",
          },
          ,
          {
            name: "Suman",
            image: userImg1,
            isActive: false,
            flagStatus: "Flag",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className="container-fluid customMargin">
        <div className="row" style={{ marginBottom: "1.5rem" }}>
          <div className="col">
            <GroupList groupList={this.state.groupList} />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "1.5rem" }}>
          <div className="col-md-6">
            <GroupMemberList groupMembers={this.state.groupMembers} />
          </div>
          <div className="col-md-6">
            <div className="dataContainerBox">
              <p className="contentTitle">Group A</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupPage;
