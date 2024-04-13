import { json } from "express";
import Player from "../models/playerModel.js";
export const createPlayer = async (req,res) => {
    try {
      const player = new Player(payload); // Create a new player instance
      const savedPlayer = await player.save(); // Save the player to the database
  
      console.log('Player saved:', savedPlayer);
    } catch (error) {
      console.error('Error saving player:', error);
    }
  }
export const getPlayerSortByScore = async(req,res) => {   
    let players = await Player.find().sort({ score: -1 })
    res.status(200).json(players)
}