import express from "express";
import { ArenaController } from "../controladores/ArenaContr";

export const rotasArenas = express.Router();

rotasArenas.post("/", ArenaController.criarArenas);
rotasArenas.get("/", ArenaController.listarArenas);