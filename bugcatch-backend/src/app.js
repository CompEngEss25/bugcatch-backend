import express from "express";
import cors from "cors";
import PlayerRoute from "./routes/playerRoute.js";
const app = express();
/**body parser */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**get request from other PORT */
app.use(cors());

/**routes setting */
app.use("/player",PlayerRoute);
export default app;

