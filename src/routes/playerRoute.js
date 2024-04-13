import express from "express";

import * as playerController from "../controllers/playerController.js";

const router = express.Router();

router.post("/create", playerController.createPlayer);
router.post("/", playerController.getPlayerById);

export default router;