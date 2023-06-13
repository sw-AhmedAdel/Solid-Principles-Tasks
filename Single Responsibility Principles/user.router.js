const express = require("express");
const userRouter = express.Router();

const { httpUpdateProfile } = require("./controller");
userRouter.put("/updateProfile", httpUpdateProfile);
model.exports = userRouter;
