import React from "react";
import RowSlotMachine from "./RowSlotMachine";

const SlotMachine = ({ data }) => {
  const render = () => {
    return Object.keys(data).map((el, i) => (
      <>
        <RowSlotMachine data={data[el]} key={i} />
      </>
    ));
  };
  return <div>{render()}</div>;
};

export default SlotMachine;
