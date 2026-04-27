const express = require('express');
const { personas } = require('./mockData');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Endpoint para obtener todas las personas
app.get('/api/personas', (req, res) => {
    res.json({
        success: true,
        data: personas,
        total: personas.length
    });
});

// Endpoint para obtener una persona por ID
app.get('/api/personas/:id', (req, res) => {
    const persona = personas.find(p => p.id === parseInt(req.params.id));

    if (!persona) {
        return res.status(404).json({
            success: false,
            message: 'Persona no encontrada'
        });
    }

    res.json({
        success: true,
        data: persona
    });
});

// Endpoint de prueba
app.get('/', (req, res) => {
    res.json({
        message: 'API de Personas',
        endpoints: {
            'GET /api/personas': 'Obtiene lista de todas las personas',
            'GET /api/personas/:id': 'Obtiene una persona por ID'
        }
    });
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint no encontrado'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
