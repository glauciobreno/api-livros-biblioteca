import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
 .get("/livros", livroController.listarLivros)
 .get("/livros/:id", livroController.listarLivroPorId)
 .post("/livros", livroController.cadastrarLivro)
 .put("/livros/:id", livroController.atualizarLivro)
 .delete("/livros/:id", livroController.excluirLivro)

 export default router;