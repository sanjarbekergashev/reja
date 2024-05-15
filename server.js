console.log("web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3 views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.post("/cread_item", (req, res) => {
  console.log(req.body);
  res.json({ test: "sucsess" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`the server is running succsefully on port: ${PORT}`);
});
