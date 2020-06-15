import React from "react";

import Button from "@material-ui/core/Button";

const CustomButton = ({ action, name }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={action}
      style={{ margin: "0 10px" }}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
