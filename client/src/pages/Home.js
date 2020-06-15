import React, { useEffect } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  useEffect(() => {}, []);

  const renderComponent = () => {
    switch (props.component) {
      case "Home":
        return <h3>home component</h3>;

      case "task one":
        return <h3>task component</h3>;

      case "task two":
        return <h3>task component</h3>;

      case "task tree":
        return <h3>task component</h3>;

      default:
        return <h3>home component</h3>;
    }
  };
  return <div>{renderComponent()}</div>;
};

const mapStateToProps = (state) => {
  return {
    component: state.ui.component,
  };
};
export default connect(mapStateToProps, {})(Home);
