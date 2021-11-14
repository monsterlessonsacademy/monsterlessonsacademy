import { Component } from "react";

class Repos extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      error: null,
    };
  }

  async fetchData() {
    try {
      const url = "https://api.github.com/users/monsterlessonsacademy/repos";
      const data = await fetch(url);
      const json = await data.json();

      if (json) {
        this.setState({
          data: json,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        error: error.message,
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.isLoading) {
      return "Loading...";
    }

    if (this.state.error) {
      return this.state.error.message;
    }

    return (
      <ul>
        {this.state.data.map(({ id, html_url, full_name }) => (
          <li key={id}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {full_name}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default Repos;
