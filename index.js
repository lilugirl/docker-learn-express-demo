const express = require("express");
const mongoose = require("mongoose");
const {MONGO_USER,MONGO_PASSWORD,MONGO_IP,MONGO_PORT}=require("./config/config");
const app = express();

const mongoURL=`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/admin`;
mongoose
  .connect(mongoURL,{
    useNewUrlParser: true,
    userUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log("successfully connect to DB"))
  .catch((e) => console.log(e));

app.get("/", (req, res) => {
  res.send("<h2>Hi There!！</h2>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));