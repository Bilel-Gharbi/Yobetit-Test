import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const TextArea = ({ placeholder, rowMin, label, data }) => {
  return (
    <div style={{ display: "grid" }}>
      <div style={{ textAlign: "center" }}>Result: {data.length}</div>
      <TextareaAutosize
        aria-label={label}
        rowsMin={rowMin}
        rowsMax={10}
        placeholder={placeholder}
        value={JSON.stringify(data)}
        style={{ width: "400px", margin: "20px" }}
      />
    </div>
  );
};

export default TextArea;
