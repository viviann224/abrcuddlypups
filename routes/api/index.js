const router = require("express").Router();
const pupRoutes = require("./pups");

// Book routes
router.use("/pups", pupRoutes);

module.exports = router;
