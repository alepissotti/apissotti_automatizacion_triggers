## Ejemplos de uso del endpoint POST /api/personas

### Crear una nueva persona

**Endpoint:** `POST http://localhost:3000/api/personas`

**Headers:** 
```
Content-Type: application/json
```

**Body (ejemplo 1):**
```json
{
  "nombre": "Roberto Fernández",
  "edad": 35,
  "email": "roberto@example.com",
  "ciudad": "Málaga"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Persona creada exitosamente",
  "data": {
    "id": 6,
    "nombre": "Roberto Fernández",
    "edad": 35,
    "email": "roberto@example.com",
    "ciudad": "Málaga"
  }
}
```

### Ejemplos con cURL

```bash
# Crear una nueva persona
curl -X POST http://localhost:3000/api/personas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Laura Gómez",
    "edad": 26,
    "email": "laura@example.com",
    "ciudad": "Granada"
  }'
```

### Validaciones

El endpoint valida:

1. **Campos requeridos**: nombre, edad, email, ciudad
2. **Edad válida**: Debe ser un número entre 0 y 150

**Ejemplo de error - Faltan campos:**
```json
{
  "success": false,
  "message": "Faltan campos requeridos: nombre, edad, email, ciudad"
}
```

**Ejemplo de error - Edad inválida:**
```json
{
  "success": false,
  "message": "La edad debe ser un número entre 0 y 150"
}
```

### Comportamiento

- El ID se genera automáticamente (siguiente al mayor ID existente)
- Responde con HTTP 201 (Created) cuando se crea exitosamente
- Responde con HTTP 400 (Bad Request) si hay validación fallida
- La persona se agrega al array de datos en memoria (no persiste en base de datos)
