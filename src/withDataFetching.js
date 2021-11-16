import { Component } from "react";

const withDataFetching = (props) => (WrapperComponent) => {
  class WithDataFetching extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        data: [],
        error: null,
      };
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      try {
        const data = await fetch(props.dataSource);
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
    render() {
      const { data, isLoading, error } = this.state;
      return (
        <WrapperComponent
          data={data}
          isLoading={isLoading}
          error={error}
          {...props}
        />
      );
    }
  }

  return WithDataFetching;
};

export default withDataFetching;
