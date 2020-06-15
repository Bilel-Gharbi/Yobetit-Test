import React from "react";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={"assets/notFound.png"} alt="not found img" />
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "500px",
    height: "500px",
  },
};

export default NotFound;
