import React, { Component } from "react";
import userImg from "../assets/images/userImg.jpg";
import userImg1 from "../assets/images/userImg2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraAlt, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

class MembersPage extends Component {
  state = {
    groupList: [
      {
        groupName: "Group B",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis mi vitae ex accumsan laoreet. Fusce dapibus fringilla feugiat. Vestibulum sed tristique orci. Pellentesque pretium felis ut congue consequat. Ut et nisi est. Proin eget nisl interdum, sagittis ex sed, viverra quam. Fusce semper placerat felis, at egestas ligula",
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis mi vitae ex accumsan laoreet. Fusce dapibus fringilla feugiat. Vestibulum sed tristique orci. Pellentesque pretium felis ut congue consequat. Ut et nisi est. Proin eget nisl interdum, sagittis ex sed, viverra quam. Fusce semper placerat felis, at egestas ligula",
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
    groupChat: [
      {
        user: "Me",
        userId: 1,
        message: "Hello Everyone",
        userImg: userImg,
        date: "2024-03-24T10:12:50.500Z",
      },
      {
        user: "John Doe",
        userId: 13,
        message: "Hello Sir. How are you ?",
        userImg: userImg,
        date: "2024-03-24T10:12:50.500Z",
      },
      {
        user: "Suman",
        userId: 12,
        message: "Hello",
        userImg: userImg,
        date: "2024-03-25T10:12:50.500Z",
      },
      {
        user: "Me",
        userId: 1,
        message: "There will be a small meeting regarding your work today.",
        userImg: userImg,
        date: "2024-03-24T10:12:50.500Z",
      },
    ],
    selectedGroup: "",
    message: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container-fluid customMargin">
        <div className="row">
          <div className="col-md-8">
            <div className="dataContainerBox">
              <div className="d-flex justify-content-between">
                <p className="contentTitle mb-0">{this.state.selectedGroup}</p>
              </div>
              <hr className="messageLine" />
              <div className="fullChatBox">
                {this.state.groupChat.length > 0
                  ? this.state.groupChat.map((message, mIdx) => {
                      if (message.userId === 1) {
                        //later will be changed by user identification
                        return (
                          <div key={mIdx} className="messageRowMine">
                            <div className="text-end">
                              <div className="messageBubble">
                                {message.message}
                              </div>
                              <span className="messageDate me-2">
                                {moment(message.date).fromNow()}
                              </span>
                            </div>
                            <img
                              src={message.userImg}
                              className="userMessageIcon"
                              alt="User message"
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={mIdx} className="messageRow">
                            <img
                              src={message.userImg}
                              className="userMessageIcon"
                              alt="User message"
                            />
                            <div className="text-end">
                              <div className="messageBubble1">
                                <span>{message.user}</span>
                                <br></br>
                                {message.message}
                              </div>
                              <span className="messageDate">
                                {moment(message.date).fromNow()}
                              </span>
                            </div>
                          </div>
                        );
                      }
                    })
                  : null}
              </div>
              <hr className="messageLine" />
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPaperclip} className="chatIcons" />
                <div style={{ flex: 1, margin: "0 10px" }}>
                  <input
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Write your message"
                  />
                </div>
                <FontAwesomeIcon icon={faCameraAlt} className="chatIcons" />
                <FontAwesomeIcon icon={faPaperPlane} className="chatIcons" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dataContainerBox" style={{ height: "100%" }}>
              <div className="d-flex justify-content-end">
                <div>
                  <select
                    name="selectedGroup"
                    value={this.state.selectedGroup}
                    className="form-select"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled>
                      Choose group
                    </option>
                    {this.state.groupList.length > 0
                      ? this.state.groupList.map((item, idx) => {
                          return (
                            <option value={item.groupName} key={idx}>
                              {item.groupName}
                            </option>
                          );
                        })
                      : "No groups added"}
                  </select>
                </div>
              </div>
              <p className="groupDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                facilisis mi vitae ex accumsan laoreet. Fusce dapibus fringilla
                feugiat. Vestibulum sed tristique orci. Pellentesque pretium
                felis ut congue consequat. Ut et nisi est. Proin eget nisl
                interdum, sagittis ex sed, viverra quam. Fusce semper placerat
                felis, at egestas ligula
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MembersPage;
