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

// Endpoint para crear una nueva persona
app.post('/api/personas', (req, res) => {
    const { nombre, edad, email, ciudad } = req.body;

    // Validación de campos requeridos
    if (!nombre || !edad || !email || !ciudad) {
        return res.status(400).json({
            success: false,
            message: 'Faltan campos requeridos: nombre, edad, email, ciudad'
        });
    }

    // Validación de edad
    if (typeof edad !== 'number' || edad < 0 || edad > 150) {
        return res.status(400).json({
            success: false,
            message: 'La edad debe ser un número entre 0 y 150'
        });
    }

    // Generar nuevo ID
    const nuevoId = Math.max(...personas.map(p => p.id), 0) + 1;

    const nuevaPersona = {
        id: nuevoId,
        nombre,
        edad,
        email,
        ciudad
    };

    // Agregar la persona al array
    personas.push(nuevaPersona);

    res.status(201).json({
        success: true,
        message: 'Persona creada exitosamente',
        data: nuevaPersona
    });
});

// Endpoint de prueba
app.get('/', (req, res) => {
    res.json({
        message: 'API de Personas',
        endpoints: {
            'GET /api/personas': 'Obtiene lista de todas las personas',
            'GET /api/personas/:id': 'Obtiene una persona por ID',
            'POST /api/personas': 'Crea una nueva persona (requiere: nombre, edad, email, ciudad)'
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
