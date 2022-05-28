const express = require("express");
const { route } = require("express/lib/application");
// const getUser = require("../controllers/getUser");
const loginController = require("../controllers/loginController");
const {
  hotal,
  hotalGet,
  upateHotal,
  deleteHotal,
} = require("../controllers/post");
const signupController = require("../controllers/signup");
const router = express.Router();

router.post("/api/signup", signupController);
router.post("/api/login", loginController);
router.post("/api/hotal", hotal);
router.get("/api/todo", hotalGet);
router.put("/api/up/:id", upateHotal);
router.delete("/api/del/:id", deleteHotal);


// router.post("/api/create" , createProduct)


module.exports = router;
