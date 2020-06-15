import React, { useState } from "react";
import { connect } from "react-redux";
import { setComponentToRender } from "../actions/ui";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    top: "65px",
  },
}));
const MenuAppBar = (props) => {
  const classes = useStyles();
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setSideBar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.selectedMenu || "Home"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        open={sideBar}
        onClose={() => setSideBar(false)}
        className={classes.drawer}
      >
        <div className={classes.list}>
          <List>
            {["Home", "task one", "task two", "task three"].map(
              (text, index) => (
                <ListItem
                  button
                  key={text}
                  onClick={() =>
                    props.setComponentToRender(text) && setSideBar(false)
                  }
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedMenu: state.ui.component,
  };
};

export default connect(mapStateToProps, { setComponentToRender })(MenuAppBar);
