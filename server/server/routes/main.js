const express = require("express");
const router = express.Router();

// adding routes & setting up the pages to be rendered

router.get("", (req, res) => {
  const locals = {
    title: "BBR's wiki",
    description: "simple blog app created with node js, express & mongo db",
  };
  res.render("index", { locals });
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
