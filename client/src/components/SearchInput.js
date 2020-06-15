import React from "react";
import { connect } from "react-redux";
//import { clearData } from "../actions/countries";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchInput = ({ data, action, clearData, label }) => {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            margin="normal"
            onChange={(e) =>
              e.target.value ? action(e.target.value) : clearData()
            }
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};

export default SearchInput;
