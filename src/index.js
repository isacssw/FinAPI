const express = require('express');
const {v4: uuidv4} = require("uuid");

const app = express();

const customers = [];

app.post("/account", (req, res) => {
    const {cpf, name} = req.body;
    const id = uuidv4();

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });
});

app.listen(3333);