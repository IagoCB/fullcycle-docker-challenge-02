const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root",
  insecureAuth: true,
  database: "fullcycle",
});

connection.connect();

app.get("/", (req, res) => {
  connection.query(
    "SELECT name FROM people",
    function (error, results, fields) {
      if (error) throw error;
      let names = "<ul>";
      results.forEach((result) => {
        names += `<li>${result.name}</li>`;
      });
      names += "</ul>";
      res.send(`<h1>Full Cycle Rocks!</h1>${names}`);
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
