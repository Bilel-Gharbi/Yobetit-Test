const axios = require("axios");

const apiUrl = "https://restcountries.eu/rest/v2";

const getAll = async (req, res) => {
  try {
    let result;
    let response = await axios.get(`${apiUrl}/all`);
    const { data } = response;
    //get countries by capital
    if (req.query.term === "capital") {
      result = data.map(({ capital, region }) => {
        return { capital, region };
      });
    } else {
      //get  all by name
      result = data.map(({ region, name, capital }) => {
        return { name, capital, region };
      });
    }
    res.status(201).json({
      status: "success",
      msg: "Get countries",
      result,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};

const search = async (req, res) => {
  try {
    let result;
    let countriesArr;
    let response = await axios.get(`${apiUrl}/all`);
    let { data } = response;
    if (req.query.by === "capital") {
      countriesArr = data.map((country) => country.capital);
      result = countriesArr.filter((country) =>
        country.toLowerCase().includes(req.query.term.toLowerCase())
      );
    } else {
      countriesArr = data.map((country) => country.name);
      result = countriesArr.filter((country) =>
        country.toLowerCase().includes(req.query.term.toLowerCase())
      );
    }

    res.status(201).json({
      status: "success",
      msg: "user logged",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ status: "fail", err });
  }
};

const test = async (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      msg: "user logged",
      result: req.body,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ status: "fail", err });
  }
};

module.exports = {
  getAll,
  search,
  test,
};
