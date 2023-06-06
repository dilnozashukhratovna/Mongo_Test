const express = require("express");
const {
    addUser,
    getUsers,
    getUsersById,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// router.post("/login", loginUser);

module.exports = router;
