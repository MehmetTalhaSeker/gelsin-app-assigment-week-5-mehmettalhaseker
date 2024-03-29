const express = require("express");
const { index, create, login, resetPassword } = require("../controllers/Users");
const { createUser, createAdminUser, userLogin, userPasswordReset } = require("../validations/Users");
const validate = require("../middlewares/validate");
// const authenticate = require("../middlewares/authenticate");
const authenticateAdmin = require("../middlewares/authenticateAdmin");

const router = express.Router();

router.route("/create-admin-user").post(validate(createAdminUser, "body"), create);
router.route("/login").post(validate(userLogin, "body"), login);

//! Admin Stuff.
router.route("/").get(authenticateAdmin, index);
router.route("/").post(authenticateAdmin, validate(createUser, "body"), create);
router.route("/reset-password").post(validate(userPasswordReset), resetPassword);
// router.route("/:typeId").post(validate(userQuery, "query"),validate(createUser, "body"), create);

module.exports = router;
