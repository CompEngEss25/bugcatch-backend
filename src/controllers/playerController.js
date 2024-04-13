import Player from "../models/playerModel.js";

export const createPlayer = async (req, res) => {
    try {
        // Just for debugging purpose
        console.log(req.body);

        // Create new player model
        const newPlayer = new Player(req.body);

        // Save playerData to the database
        await newPlayer.save();

        // Return success message response
        res.status(200).json({ message: "Success" });
    }
    catch (err){
        console.log(err);
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
};

export const getPlayerById = async (req, res) => {
    try {
        const playerIdQuery = req.body.playerId;
        const result = await Player.find({playerId: playerIdQuery});
        res.status(200).json(result);
    }
    catch (err) {
        console.log(err);
        // Error handlers
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
          } else {
            res.status(500).json({ error: "Internal server error" });
          }
    }
}



