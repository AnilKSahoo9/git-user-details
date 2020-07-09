import * as React from "react";
import "./Form.css";
import { connect } from "react-redux";
import * as action from "../redux/ActionCreate";
import { InitialState } from "../redux/Reducers";
import { appState } from "../redux/Store";
import { Doughnut } from "react-chartjs-2";
//import UserDetails from "./UserDetails";
interface dispatchProps {
  getUser: (event: any) => any;
  getData: (userInput: string, event: any) => any;
  getRepos: (userInput: string) => any;
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
    //console.log("button clicked");
    this.props.getData(this.props.userInput, event);
    this.props.getRepos(this.props.userInput);
  }

  render() {
    let repoData = this.props.repos.map((repo: any) => repo.language); // for extracting languages from each repository
    let repoLang = repoData.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});

    let totalStars = this.props.repos
      .map((repo: any) => repo.stargazers_count)
      .reduce((a, b) => a + b, 0);
    //console.log(totalStars);

    let totalForks = this.props.repos
      .map((repo: any) => repo.forks_count)
      .reduce((a, b) => a + b, 0);
    //console.log(totalForks);

    //console.log(map);
    //console.log(Object.keys(map));
    //console.log(Object.values(map));

    const state1 = {
      labels: ["Followers", "Following"],
      datasets: [
        {
          backgroundColor: ["#0074D9", "#FF4136"],
          data: [this.props.followers, this.props.following],
        },
      ],
    };

    const state2 = {
      labels: ["Total Repos", "Total Stars", "Total Forks"],
      datasets: [
        {
          label: "Data Visualized",
          backgroundColor: ["#0074D9", "#FF4136", "#2ECC40"],
          data: [this.props.repos.length, totalStars, totalForks],
        },
      ],
    };

    const state3 = {
      labels: this.props.contributions.map((item: any) => item.year),
      datasets: [
        {
          label: "Data Visualized",
          backgroundColor: [
            "#0074D9",
            "#FF4136",
            "#2ECC40",
            "#FF851B",
            "#7FDBFF",
            "#B10DC9",
            "#FFDC00",
            "#001f3f",
            "#39CCCC",
            "#01FF70",
            "#85144b",
            "#F012BE",
            "#3D9970",
            "#111111",
            "#AAAAAA",
          ],
          data: this.props.contributions.map((item: any) => item.total),
        },
      ],
    };

    const state4 = {
      labels: Object.keys(repoLang),
      datasets: [
        {
          backgroundColor: [
            "#0074D9",
            "#FF4136",
            "#2ECC40",
            "#FF851B",
            "#7FDBFF",
            "#B10DC9",
            "#FFDC00",
            "#001f3f",
            "#39CCCC",
            "#01FF70",
            "#85144b",
            "#F012BE",
            "#3D9970",
            "#111111",
            "#AAAAAA",
          ],
          data: Object.values(repoLang),
        },
      ],
    };

    return (
      <div className="main-container">
        <div className="navbar">~ : Github User Details : ~</div>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter User Name"
              onChange={this.handleUserInput}
            />
            <button type="submit">Fetch Details</button>
          </form>
        </div>
        <div className="result-container">
          <div className="user-details">
            <img
              className="user-photo"
              alt={this.props.fullName}
              src={this.props.profileUrl}
            />
            <div className="details">
              <div>User Name: {this.props.userId}</div>
              <div>Full Name: {this.props.fullName}</div>
              {/* <div>Email Id: {this.props.emailId}</div> */}
              <div>Bio: {this.props.bio}</div>
              <div>Location: {this.props.location}</div>
              <div>Website: {this.props.website}</div>
              <div>Company: {this.props.company}</div>
              <div>Total no. of commits: {this.props.totalCommit}</div>
              <div>
                Link to <a href={this.props.githubUrl}>GitHub Profile</a>
              </div>
            </div>
            {/* <div>Followers: {this.props.followers}</div>
            <div>Following: {this.props.following}</div> */}
            {/* <UserDetails username={this.props.userId} /> */}
            {/* <div>Total no. of Repository: {this.props.repos.length}</div> */}
            {/* <div>
              Contributions:
            {this.props.contributions.map((item: any) => (
              <h6>{item.total}</h6>
            ))}
            </div> */}
          </div>
          {/* <div className="showChart">
            Enter which chart type u want to see?
            <input type="radio" name="chart" value="doughnut" checked />
            Doughnut
            <input type="radio" name="chart" value="bar" />
            Bar
            <input type="radio" name="chart" value="scatter" />
            Scatter
          </div> */}
          <div className="all-chart">
            <div>~ : Data Visualization : ~</div>
            <div className="chart">
              <div className="chart1">
                <Doughnut
                  data={state1}
                  options={{
                    title: {
                      display: true,
                      text: "Followers vs Following",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
              <div className="chart2">
                <Doughnut
                  data={state2}
                  options={{
                    title: {
                      display: true,
                      text: "Total Repo ~ Total Stars ~ Total Forks",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
              <div className="chart3">
                <Doughnut
                  data={state3}
                  options={{
                    title: {
                      display: true,
                      text: "No. of Contributions per year",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
              <div className="chart4">
                <Doughnut
                  data={state4}
                  options={{
                    title: {
                      display: true,
                      text: "No. of Languages used per repository",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>

          <div className="repo-content">
            <div>~ : Repository Details : ~</div>
            <div className="repo-details">
              {this.props.repos.map((repo: any, index: any) => {
                return (
                  <div className="repo">
                    <li key={index}>
                      <a href={repo.html_url}>{repo.name}</a>
                      <h3>{repo.description}</h3>
                      <h3>Forks: {repo.forks_count}</h3>
                      <h3>Stars: {repo.stargazers_count}</h3>
                      <h3>Open Issues: {repo.open_issues}</h3>
                    </li>
                  </div>
                );
              })}
            </div>
          </div>
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
    followers: state.followers,
    following: state.following,
    bio: state.bio,
    location: state.location,
    website: state.website,
    company: state.company,
    githubUrl: state.githubUrl,
    repos: state.repos,
    totalCommit: state.totalCommit,
    contributions: state.contributions,
  };
};

const mapDispatchToProps = {
  getUser: action.getUser,
  getData: action.getData,
  getRepos: action.getRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
