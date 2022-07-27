const express = require("express");
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const sauceController = require("../controllers/sauce");

//chemin de l'api
router.post("/", auth, multer, sauceController.createSauce);
router.put("/:id", auth, multer, sauceController.modifySauce);
router.delete("/:id", auth, sauceController.deleteSauce);
router.get("/:id", auth, sauceController.getOneSauce);
router.get("/", auth, sauceController.getAllSauces);
router.post("/:id/like", auth, sauceController.likesAndDislikes)
module.exports = router;
