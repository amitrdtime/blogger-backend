require("dotenv").config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000;
const mongoose = require("mongoose")


mongoose
	.connect("mongodb://127.0.0.1:27017/db_bloggerv1")
	.then(() => {
    console.log('Mongodb Mongoose connected');
      const userRouter = require("./routers/user-router");
      const catRouter = require("./routers/category-router");
      const postRouter = require("./routers/posts-router");

      // parse application/x-www-form-urlencoded
      app.use(bodyParser.urlencoded({ extended: false }))

      // parse application/json
      app.use(bodyParser.json())

      app.use("/user", userRouter);
      app.use("/cat", catRouter);
      app.use("/posts", postRouter);

      app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })

}).catch(error => {
  console.error('Error starting server:', error);
});
