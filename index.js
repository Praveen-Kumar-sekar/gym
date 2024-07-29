const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect.js");
const chestRouter = require("./routes/chestRoute.js");
app.use(express.json());

app.use("/api/chest", chestRouter);

(async () => {
  await dbConnect();
  app.listen(PORT, () => {
    console.log(`Server is listening at PORT ${PORT}`);
  });
})();