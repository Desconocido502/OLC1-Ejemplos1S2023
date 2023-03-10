const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// objeto de datos
const personas = [
        {id:1, nombre:'Juan'},
        {id:2, nombre:'Pedro'},
        {id:3, nombre:'Maria'},
        {id:4, nombre:'Jose'}
    ];


//ednpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/personas', (req, res) => {
    res.send(personas);
});
app.get('/personas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const persona = personas.find(p => p.id === id);   
    if(persona){
        res.send(persona);
    }else{
        res.status(404).send('Persona no encontrada');
    }
});

app.post('/personas', (req, res) => {
    const persona = {
        id: personas.length + 1,
        nombre: req.body.nombre
    };
    personas.push(persona);
    res.send(persona);
});

app.put('/personas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const persona = personas.find(p => p.id === id);
    if(persona){
        persona.nombre = req.body.nombre;
        res.send(persona);
    }else{
        res.status(404).send('Persona no encontrada');
    }
});

app.delete('/personas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const persona = personas.find(p => p.id === id);
    if(persona){
        const index = personas.findIndex(p => p.id === id);
        personas.splice(index, 1);
        res.send("Persona eliminada");
    }else{
        res.status(404).send('Persona no encontrada');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
