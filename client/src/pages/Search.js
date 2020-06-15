import React from "react";
import { connect } from "react-redux";
import {
  getAllCountries,
  searchForCountry,
  clearData,
  getAllCapitalsCountries,
  searchForCountryByCapital,
} from "../actions/countries";

import SearchInput from "../components/SearchInput";
import TextArea from "../components/TextArea";
import CustomButton from "../components/CustomButton";

const Search = ({ allCountries, searchedCountries, ...props }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ flex: "2", display: "flex", alignItems: "center" }}>
          <CustomButton
            name="get all countries name"
            action={props.getAllCountries}
          />
          <CustomButton
            name="get all capitals"
            action={props.getAllCapitalsCountries}
          />
          {/* <CustomButton /> */}
        </div>
        <div style={{ flex: "2" }}>
          <TextArea
            data={allCountries.length ? allCountries : props.allCapitals}
            rowMin={10}
            placeholder={"search input "}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCountries: state.countries.allCountries,
    searchedCountries: state.countries.searchedCountries,
    searchedCapitals: state.countries.searchedCapitals,
    allCapitals: state.countries.allCapitals,
  };
};
export default connect(mapStateToProps, {
  getAllCountries,
  searchForCountry,
  getAllCapitalsCountries,
  searchForCountryByCapital,
  clearData,
})(Search);
