import * as React from "react";
import "./Form.css";
import { connect } from "react-redux";
import * as action from "../redux/ActionCreate";
import { InitialState } from "../redux/Reducers";
import { appState } from "../redux/Store";

interface dispatchProps {
  getUser: (event: any) => any;
  getData: (userInput: string, event: any) => any;
}

type Props = InitialState & dispatchProps;

class Form extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.getUser(event);
  };

  handleSubmit(event: any) {
    console.log("button clicked");
    this.props.getData(this.props.userInput, event);
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

const mapStateToProps = (state: appState) => {
  return {
    userInput: state.userInput,
    userId: state.userId,
    profileUrl: state.profileUrl,
    emailId: state.emailId,
    fullName: state.fullName,
  };
};

const mapDispatchToProps = {
  getUser: action.getUser,
  getData: action.getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
