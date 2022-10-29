const express = require("express");
const app = express();

// ROTA
// - Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// -- GET - Pega um info
// -- POST - Cria uma info
// -- PUT - Altera toda uma info
// -- PATH - Altera parte da info
// -- DELETE - Apaga uma info
// - Name - Um indentificador da rota (endereço)
// - Function (Callback) - Responsavel por executar algum comando

app.get("/soma", (req, res) => {
  const soma = 1 + 1;
  res.send({ soma: soma });
});

app.listen(3000);
