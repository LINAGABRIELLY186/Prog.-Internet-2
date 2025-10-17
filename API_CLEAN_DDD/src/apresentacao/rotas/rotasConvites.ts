import express from "express";
import { ConviteController } from "../controladores/ConviteContr";
import { CriarConvite } from "../../aplicacao/casos/Convites/criarConvite";

export const rotasConvite = express.Router();

rotasConvite.post('/', ConviteController.criarConvite);
rotasConvite.get('/', ConviteController.listarConvite);
rotasConvite.put('/', ConviteController.atualizarConvite);
rotasConvite.delete('/', ConviteController.deleteConvite);