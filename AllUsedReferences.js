const express = require("express");
const app = express();
const exp = express(); //same as app
const fs = require("fs");
const args = process.argv;
const path = require("path");
const colors = require("colors");
const RootPath = require("../RootPathFile.js");
const PathToCRUDFiles = path.join(RootPath, "CRUD");
const PathToViewFiles = path.join(RootPath, "views");
const PathToDatabaseFiles = path.join(RootPath, "DatabaseFiles");
const PathToUsers = path.join(RootPath, "expressPractic/AllUsers");
// const PathToErrorsInViewFiles = path.join(RootPath, "views/errors");
const PathToStudentcontroller = path.join(
  PathToCRUDFiles,
  "studentcontroller.js"
);
// const commonMW = require("../Middlewares/commonMiddleWare");
//======================= MiddleWare at APP LEVEL ======================

// app.use(commonMW.ageCheckerMW);

//===========================================================

//======================= MiddleWare at Route LEVEL ======================

// const authRouter = express.Router();
// authRouter.use(commonMW.loginMW);
// app.use('/base',authRouter);

//===========================================================
//======================= MiddleWare at Route LEVEL ======================

// const ageRouter = express.Router();
// ageRouter.use(commonMW.ageCheckerMW);
// app.use("/", ageRouter);
//===========================================================

module.exports = {
  fs,
  exp, //same as app
  express,
  app,
  path,
  args,
  colors,
  express,
  RootPath,
  PathToUsers,
  PathToCRUDFiles,
  PathToViewFiles,
  PathToDatabaseFiles,
  // PathToErrorsInViewFiles,
  PathToStudentcontroller,
  // authRouter,
  // ageRouter,
  // commonMW,
};
