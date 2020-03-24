const express = require('express');
const routes = express.Router();


routes.post('/users', (request, response) => {
    //const params = request.query; //users?name=Moises&idade=25 --> /users
    //const params = request.params; //users/1 --> /users/:id
    const body = request.body;
    console.log(body);
    
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Moisés Guilherme'
    });
})

module.exports = routes;
