# API de Personas

Una API REST simple construida con Node.js y Express que devuelve una lista de personas.

## Instalación

Las dependencias ya están instaladas, pero si necesitas reinstalarlas ejecuta:

```bash
npm install
```

## Uso

### Iniciar el servidor

```bash
npm start
```

O para desarrollo con reinicio automático:

```bash
npm run dev
```

El servidor estará disponible en: `http://localhost:3000`

## Endpoints

### 1. Obtener todas las personas
```
GET /api/personas
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nombre": "Juan Pérez",
      "edad": 28,
      "email": "juan@example.com",
      "ciudad": "Madrid"
    },
    ...
  ],
  "total": 5
}
```

### 2. Obtener una persona por ID
```
GET /api/personas/:id
```

**Ejemplo:** `GET /personas/1`

**Respuesta:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "nombre": "Juan Pérez",
    "edad": 28,
    "email": "juan@example.com",
    "ciudad": "Madrid"
  }
}
```

### 3. Información del servidor
```
GET /
```

Devuelve la información disponible de endpoints.

## Estructura del proyecto

```
├── server.js          # Servidor Express principal
├── mockData.js        # Datos mockeados de personas
├── package.json       # Dependencias y scripts
├── .gitignore         # Archivos a ignorar en git
└── README.md          # Este archivo
```

## Probar la API

Puedes usar `curl`, Postman, o cualquier cliente HTTP:

```bash
# Obtener todas las personas
curl http://localhost:3000/api/personas

# Obtener una persona específica
curl http://localhost:3000/api/personas/1
```

## Modificar los datos

Para agregar, modificar o eliminar personas, edita el archivo `mockData.js`.

---

**Proyecto original:** Automatización con Triggers de GitHub Actions
