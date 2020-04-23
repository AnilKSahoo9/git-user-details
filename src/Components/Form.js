import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      userId: "",
      profileUrl: "",
      fullName: "",
      emailId: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };

  async handleSubmit(event) {
    //console.log(this.state.userInput);
    event.preventDefault();
    let response = await fetch(
      `https://api.github.com/users/${this.state.userInput}`
    );
    let data = await response.json();
    this.setState({
      userId: data.login,
      profileUrl: data.avatar_url,
      fullName: data.name,
      emailId: data.email,
    });
    //console.log(data);
  }

  render() {
    return (
      <div>
        <div className="navbar">Github User Details</div>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="User ID"
              onChange={this.handleUserInput}
            />
            <button type="submit">Fetch Details</button>
          </form>
        </div>
        <div className="show">
          <img src={this.state.profileUrl} />
          <div>User Name: {this.state.userId}</div>
          <div>Full Name: {this.state.fullName}</div>
          <div>Email Id: {this.state.emailId}</div>
        </div>
      </div>
    );
  }
}

export default Form;
