import express from "express";
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { atualizandoImagem, deletandoImagem, downloadImagem, inserindoImagem, mostrandoImagens } from "./controllers/ImagemController.js";
import { atualizarUsuario, criarUsuario, deletarUsuario, logarUsuario, mostrarUmUsuario, mostrarUsuario } from "./controllers/UsuarioController.js";

const app = express();
const porta = 5000;

app.use(fileUpload());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Funcionando");
});

app.get('/public/:nome_imagem',downloadImagem);

//CRUD Imagens
app.post('/imagem', inserindoImagem);
app.get('/imagem',mostrandoImagens);
app.put('/imagem/:id_imagem',atualizandoImagem);
app.delete('/imagem/:id_imagem',deletandoImagem);

//CRUD Usuario
app.post('/usuario/',criarUsuario);
app.get('/usuario/',mostrarUsuario);
app.get('/usuario/:id_usuario',mostrarUmUsuario)
app.put('/usuario/:id_usuario',atualizarUsuario);
app.delete('/usuario/:id_usuario',deletarUsuario);

//Rota para logar
app.post('/logar/',logarUsuario);

app.listen(porta, () => {
  console.log(`API Rodando na porta ${porta}`);
});
