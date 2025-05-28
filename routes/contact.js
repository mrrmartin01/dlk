var express = require("express");
var router = express.Router();

/* GET about page. */
router.get("/", function (req, res) {
  res.render("Contact", {
    title: "Contact",
    description: "Get in touch with me.",
    keywords: "contact, get in touch, reach out",
    author: "Theophilus Ogunleye",
    pageStyles: "/stylesheets/contact.css",
  });
});

module.exports = router;
