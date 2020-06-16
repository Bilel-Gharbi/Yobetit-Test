import React from "react";
import { withRouter } from "react-router-dom";
import { LinkedIn, GitHub } from "@material-ui/icons";

const Home = (props) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <div style={styles.icon} onClick={() => props.history.push("linkedin")}>
          <LinkedIn fontSize="large" style={styles.linkedIn} />
        </div>
        <div style={styles.icon} onClick={() => props.history.push("github")}>
          <GitHub fontSize="large" style={styles.git} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "grid",
    width: "100vw",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "200px",
    height: "200px",
    margin: "0 20px",
    cursor: "pointer",
  },
  linkedIn: {
    width: "100%",
    height: "100%",
    color: "#3f51b5",
  },
  git: {
    width: "100%",
    height: "100%",
  },
};
export default withRouter(Home);
