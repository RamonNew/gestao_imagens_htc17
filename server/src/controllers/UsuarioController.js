import {
  createUsuario,
  readUsuario,
  showOneUsuario,
  updateUsuario,
  deleteUsuario,
  getUserByLoginPassword,
} from "../models/UsuarioModel.js";

export async function criarUsuario(req, res) {
  console.log("UsuarioController :: criarUsuario");
  const { login, senha } = req.body;

  if (!login || !senha) {
    res.status(400).json({ message: "login e senha devem ser criados" });
  } else {
    try {
      const [status, resposta] = await createUsuario(login, senha);
      res.status(status).json(resposta);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "UsuarioController :: erro ao criarUsuario" });
    }
  }
}

export async function mostrarUsuario(req, res) {
  console.log("UsuarioController :: mostrarUsuario");

  try {
    const [status, resposta] = await readUsuario();
    res.status(status).json(resposta);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "UsuarioController :: erro ao mostrarUsuario" });
  }
}

export async function mostrarUmUsuario(req, res) {
  console.log("UsuarioController :: mostrarUmUsuario");
  const { id_usuario } = req.params;

  if (!id_usuario) {
    res.status(400).json({ message: "login e senha devem ser criados" });
  } else {
    try {
      const [status, resposta] = await showOneUsuario(id_usuario);
      res.status(status).json(resposta);
    } catch (error) {
      console.log("UsuarioController :: mostrarUmUsuario");
      res
        .status(500)
        .json({ message: "UsuarioController :: erro ao mostrarUsuario" });
    }
  }
}

export async function atualizarUsuario(req, res) {
  console.log("UsuarioController :: atualizarUsuario");
  const { login, senha } = req.body;

  if (!login || !senha) {
    res.status(400).json({ message: "login e senha devem ser criados" });
  } else {
    try {
      const [status, resposta] = await updateUsuario(login, senha);
      res.status(status).json(resposta);
    } catch (error) {
      console.log("UsuarioController :: atualizarUsuario");
      res
        .status(500)
        .json({ message: "UsuarioController :: erro ao atualizarUsuario" });
    }
  }
}

export async function deletarUsuario(req, res) {
  console.log("UsuarioController :: deletarUsuario");
  const { id_usuario } = req.params;

  if (!id_usuario) {
    res.status(400).json({ message: "id_usuario deve ser informado" });
  } else {
    try {
        const [status, resposta] = await deleteUsuario(id_usuario);
        res.status(status).json(resposta);  
    } catch (error) {
        console.log("UsuarioController :: deletarUsuario");
      res
        .status(500)
        .json({ message: "UsuarioController :: erro ao deletarUsuario" });    
    }
  }
}

export async function logarUsuario(req, res) {
    console.log("UsuarioController :: logarUsuario");  
    const { login,senha } = req.body;

    if (!login || !senha) {
        res.status(400).json({ message: "login e senha devem ser criados" });
    }else{
        console.log("UsuarioController :: logarUsuario");
        res
          .status(500)
          .json({ message: "UsuarioController :: erro ao logarUsuario" });     
    }
}
