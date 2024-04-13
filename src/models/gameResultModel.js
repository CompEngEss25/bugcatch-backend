import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
    gameId: {
      type: String,
      required: true,
    },
    playerId: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
});

const gameResult = mongoose.model("GameResult", itemSchema);

export default gameResult;

