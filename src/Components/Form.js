import React, { Component } from "react";
import "./Form.css";
import { connect } from "react-redux";
import * as action from "../redux/ActionCreate";

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (event) => {
    this.props.getUser(event);
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.getData(this.props.userInput);
  }

  render() {
    return (
      <div>
        <div className="navbar">Github User Details</div>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="User Name"
              onChange={this.handleUserInput}
            />
            <button type="submit">Fetch Details</button>
          </form>
        </div>
        <div className="show">
          <img alt={this.props.fullName} src={this.props.profileUrl} />
          <div>User Name: {this.props.userId}</div>
          <div>Full Name: {this.props.fullName}</div>
          <div>Email Id: {this.props.emailId}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
    userId: state.userId,
    profileUrl: state.profileUrl,
    emailId: state.emailId,
    fullName: state.fullName,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    getUser: (event) => dispatch(action.getUser(event.target.value)),
    getData: (name) => dispatch(action.getData(name)),
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(Form);
