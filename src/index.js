const app = require("./app");
const cookieParser = require("cookie-parser");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is listening on " + port);
});
