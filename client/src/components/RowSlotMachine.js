import React, { useState, useEffect } from "react";
import { createObjFromArray } from "../utils";

const RowSlotMachine = ({ data }) => {
  const [state, setState] = useState({});
  useEffect(() => {
    if (data) {
      setState(createObjFromArray(data));
    }
  }, [data, setState]);

  return (
    <div style={styles.main}>
      {Object.keys(state).map((el, i) => {
        return (
          <div key={i} style={styles.container}>
            <div>
              <img
                src={`./assets/${el}.png`}
                alt="img slot machine"
                style={styles.img}
              />
            </div>

            <div style={styles.elementText}>
              {state[el]} X {/* {el} */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    margin: "10px 0px",
    padding: "0 20px",
  },
  img: {
    width: "150px",
    height: "150px",
    margin: "0 10px",
  },
  container: {
    position: "relative",
    margin: "0 16px",
  },
  elementText: {
    position: "absolute",
    top: "8%",
    left: "-7%",
    fontSize: "30px",
    fontWeight: "bolder",
  },
};

export default RowSlotMachine;
