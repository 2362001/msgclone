const express = require("express")
const router = express.Router()
const validateForm = require("../service/validateForm")

router.route("/login").get()

module.exports = router