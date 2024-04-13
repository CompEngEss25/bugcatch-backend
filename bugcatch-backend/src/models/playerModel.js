import mongoose from "mongoose";

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  ip: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Player = model("Player", playerSchema);

export default Player;