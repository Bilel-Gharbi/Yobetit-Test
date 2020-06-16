import React from "react";
import { connect } from "react-redux";
import { startNewGame, play } from "../actions/slotMachine";
import SlotMachine from "../components/SlotMachine";
import Typography from "@material-ui/core/Typography";

import CustomButton from "../components/CustomButton";
const Game = (props) => {
  return (
    <div>
      <div style={styles.center}>
        {props.game.gain ? (
          <CustomButton action={() => props.startNewGame()} name="Reset" />
        ) : null}

        <CustomButton action={() => props.play(props.game)} name="Play " />
      </div>
      <Typography variant="h6" style={styles.text}>
        Game Score: {props.game.gain || "0"}
      </Typography>

      <div style={styles.center}>
        {props.game.gain ? (
          <SlotMachine data={props.game.slotMachine} />
        ) : (
          <Typography variant="h6" style={styles.text}>
            Click play to start
          </Typography>
        )}
      </div>
    </div>
  );
};

const styles = {
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "2%",
  },
  text: {
    textAlign: "center",
  },
};
const mapStateToProps = (state) => {
  return {
    game: state.game,
  };
};
export default connect(mapStateToProps, { startNewGame, play })(Game);
