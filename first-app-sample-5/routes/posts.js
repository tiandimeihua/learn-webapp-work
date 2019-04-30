var express = require("express");
var router = express.Router();

/* GET posts page. */
router.get("/", function (req, res, next) {
  res.render("posts", {
    title: "Posts Page",
    postList: ["LineOne", "LineTwo", "LineThree"]
  })
});

/* GET post/list page */
router.get("/lists", function(req, res, next){
 res.json({postsList:["嘿嘿嘿","哈哈哈","嘻嘻嘻"]})
});
module.exports = router;
