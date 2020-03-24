const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection')

const routes = express.Router();


routes.post('/ongs', async (request, response) => {
    //const params = request.query; //users?name=Moises&idade=25 --> /users
    //const params = request.params; //users/1 --> /users/:id
    const {name, email, whatsapp, city, uf} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id });
});

module.exports = routes;
