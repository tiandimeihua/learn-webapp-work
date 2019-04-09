var express = require("express");
var router = express.Router();

/* GET posts page. */
router.get("/", function (req, res, next) {
  res.render("posts", {
    title: "Posts Page",
    postsList: ["posts1", "posts2", "posts3"],
    footer: "page footer test"
  });
});

module.exports = router;
