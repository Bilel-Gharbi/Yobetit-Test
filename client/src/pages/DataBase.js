import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { Typography } from "@material-ui/core";

const DataBase = () => {
  const query1 =
    "CREATE TABLE CASINO( ID INT NOT NULL, NAME VARCHAR (20) NOT NULL, PRIMARY KEY (ID) ) CREATE TABLE COUNTRY( ID INT NOT NULL, NAME VARCHAR (20) NOT NULL, PRIMARY KEY (ID) ) CREATE TABLE GAME( ID INT NOT NULL, TYPE VARCHAR (20) NOT NULL, PRIMARY KEY (ID) casinoId int FOREIGN KEY REFERENCES casino(id) countryId int FOREIGN KEY REFERENCES country(id) ) CREATE TABLE PLAYER( ID INT NOT NULL, NAME VARCHAR (20) NOT NULL, PRIMARY KEY (ID) )";
  const query2 =
    "SELECT ID, NAME, FROM PLAYER INNER JOIN GAME ON GAME.TYPE = 'SLOT'";
  return (
    <div style={styles.container}>
      <div style={styles.img}>
        <img src="./assets/sql.jpg" alt="sql schema" />
      </div>
      <div style={styles.sql}>
        <Typography style={{ textAlign: "center" }}>
          Sql query question
        </Typography>
        <TextareaAutosize
          rowsMax={10}
          value={JSON.stringify(query1)}
          style={{ width: "400px", margin: "20px" }}
        />
        <TextareaAutosize
          rowsMax={10}
          value={JSON.stringify(query2)}
          style={{ width: "400px", margin: "20px" }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
  sql: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default DataBase;
