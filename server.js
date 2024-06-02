const http = require("http");

// const { required } = require("nodemon/lib/config");

const mongodb = require("mongodb");
// let db;
const connectionString =
  "mongodb+srv://sanjarbekk9119:3eDpKx53kybtGh5a@cluster0.pm3lgqo.mongodb.net/Reja";
// 3eDpKx53kybtGh5a
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection sucseed");
      module.exports = client;

      const app = require("./app");

      const server = http.createServer(app);
      let PORT = 7006;
      server.listen(PORT, function () {
        console.log(
          `the server is running succsefully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
console.log("sen serverdasan");
