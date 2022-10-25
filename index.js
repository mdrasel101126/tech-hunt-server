const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/coursesName.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("TechHunt Server is Running.....");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course.id == id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("TechHunt listening on port ", port);
});
