import React from "react";

const withDataFetching = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        isLoading: true,
        error: null,
      };
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

    componentDidMount() {
      this.fetchData();
    }

    render() {
      const { data, isLoading, error } = this.state;

      return (
        <WrappedComponent
          data={data}
          isLoading={isLoading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  return WithDataFetching;
};

export default withDataFetching;
