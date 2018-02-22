const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongojs = require("mongojs");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("client/build"));

var databaseUrl = "countries";
var collections = ["countrydata"];

var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
  console.log("Database Error: ", error);
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/random", function (req, res) {
  //query db and return data for one country/capital
  //send coordinates to google map
  db.countrydata.find().sort({ name: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    } else {
      const result = found[Math.floor(Math.random() * found.length)]
      res.json(result)
      console.log(result);
    }
  });
});

app.get("/api/testpage", function (req, res) {
  db.countrydata.find().sort({ name: 1 }, function (error, found) {
    if (error) {
      console.log(error);
    } else {
      const nameOnly=[];
      found.forEach(element => nameOnly.push(element.name));
      console.log(nameOnly);
      res.send(nameOnly);
    }
  });
});
  // db.countrydata.aggregate([{ $sample: { size: 1 } }], function (error, found) {
  //     if (error) {
  //         res.json(error);
  //     } else {
  //       console.log(found);
  //        // res.json(found);
  //     }
  // });


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
