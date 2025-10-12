import express from "express";
import { PartidasController } from "../controladores/PartidaContr";

export const rotasPartidas = express.Router();

rotasPartidas.post("/", PartidasController.criarPartidas);
rotasPartidas.get("/", PartidasController.listarPartidas);
rotasPartidas.put("/", PartidasController.atualizarPartida);
rotasPartidas.delete("/", PartidasController.deletePartida);
