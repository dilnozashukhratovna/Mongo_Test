const { Router } = require("express");
const userRouter = require("./user.routes");
const router = Router();

router.use("/api/user", userRouter);

module.exports = router;
