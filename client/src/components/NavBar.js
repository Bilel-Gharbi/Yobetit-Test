import React from "react";
import { withRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const MenuAppBar = (props) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {["Home", "PartOne", "SlotMachine", "DataBase"].map((text, key) => (
            <div
              key={key}
              style={{ margin: "0 35px", cursor: "pointer" }}
              onClick={() =>
                text === "Home"
                  ? props.history.push("/")
                  : props.history.push(text)
              }
            >
              <Typography>{text}</Typography>
            </div>
          ))}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withRouter(MenuAppBar);
