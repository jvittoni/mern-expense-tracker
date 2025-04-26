const express = require("express");
const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncome
} = require("../controllers/incomeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", protect, addIncome);
router.get("/get", protect, getAllIncome);
router.get("/downloadincome", protect, downloadIncome);
router.delete("/:id", protect, deleteIncome);

module.exports = router;