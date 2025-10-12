import express from "express";
import { UserController } from "../controladores/UserContr";

export const rotasUser = express.Router();

rotasUser.post('/', UserController.criar);
rotasUser.get('/', UserController.listar);
rotasUser.put('/', UserController.atulizar);
rotasUser.delete('/', UserController.delete);