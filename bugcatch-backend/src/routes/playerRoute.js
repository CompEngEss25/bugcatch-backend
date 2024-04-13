import express from "express"
import * as playerController from "../controller/playerController.js"

const router = express.Router();
router.get("/",playerController.getPlayerSortByScore);
router.post("/",playerController.createPlayer);
export default router;