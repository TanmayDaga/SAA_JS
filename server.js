const express = require("express");
const path = require("path");
const db = require("./config/db");
const app = express();
const PORT = 8000;

// using path.join as node may be called from another directory
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

db.ORM.sync({ force: false }).then(() => {
  require("./test/init").init();
  app.listen(PORT, console.log("server is listening at port:" + PORT));
});

app.use("/", require("./routes/home"));
app.use("/", require("./routes/team"));
app.use("/", require("./routes/gallery"));
