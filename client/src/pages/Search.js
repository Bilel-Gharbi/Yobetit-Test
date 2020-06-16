import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/countries";

import SearchInput from "../components/SearchInput";
import TextArea from "../components/TextArea";
import CustomButton from "../components/CustomButton";

const Search = ({ allCountries, searchedCountries, ...props }) => {
  return (
    <>
      <div style={styles.container1}>
        <SearchInput
          data={searchedCountries}
          label="search by name"
          action={props.searchForCountry}
          clearData={() => props.clearData("searchedCountries")}
        />
        <TextArea
          data={searchedCountries}
          rowMin={10}
          placeholder={"search by name "}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <SearchInput
          data={props.searchedCapitals}
          action={props.searchForCountryByCapital}
          label="search by capital"
          clearData={() => props.clearData("searchedCapitals")}
        />
        <TextArea
          data={props.searchedCapitals}
          rowMin={10}
          placeholder={"search capital "}
        />
      </div>

      <div style={styles.container2}>
        <div>
          <CustomButton name="All countries" action={props.getAllCountries} />
          <CustomButton
            name="All capitals"
            action={() =>
              props.getAllCapitalsCountries() && props.clearData("allCountries")
            }
          />
        </div>
        <div>
          <TextArea
            data={allCountries.length ? allCountries : props.allCapitals}
            rowMin={10}
            placeholder={"search input "}
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  container1: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  container2: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
};

const mapStateToProps = (state) => {
  return {
    allCountries: state.countries.allCountries,
    searchedCountries: state.countries.searchedCountries,
    searchedCapitals: state.countries.searchedCapitals,
    allCapitals: state.countries.allCapitals,
  };
};
export default connect(mapStateToProps, { ...actions })(Search);
