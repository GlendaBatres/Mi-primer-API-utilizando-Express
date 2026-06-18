
// CONFIGURACIÓN E INICIALIZACIÓN DE EXPRESS
const express = require('express');
const app = express();

// Middleware obligatorio para poder recibir datos en formato JSON (para POST y PUT)
app.use(express.json());


// BASE DE DATOS EN MEMORIA (Datos Quemados)

let estudiantes = [
    { id: 1, nombre: "Ana García", edad: 18, correo: "ana.garcia@email.com" },
    { id: 2, nombre: "Carlos López", edad: 17, correo: "carlos.lopez@email.com" },
    { id: 3, nombre: "María Pérez", edad: 18, correo: "maria.p@email.com" }
];

// creando enrutamiento pára API
// creando la ruta principal (peticion http: GET, POST, PUT, DELETE )
/**  
//(Pimer parametro) req = request(Se utilizara cuando necesitamos por ejemplo datos del usuario
(body), headers, parametros
//(Segundo parametro) res = response (lo devuelve  al cliente)   
*/
// Mi primer endpoint
app.get('/', (req, res) => {
    res.send("Hola Mundo, bienvenidos a mi API estudiantes");
});

/**
 * Ruta para obtener  todos los estudiantes
 * Responderá en: GET http://localhost:3000/estudiantes
 */
app.get('/estudiantes', (req, res) => {
    // codigo
    res.status(200).json(estudiantes);
});

/**
 *  GET BY ID: Obtener un solo estudiante por su ID
 * Responderá en: GET http://localhost:3000/estudiantes/1
 */
app.get('/estudiantes/:id', (req, res) => {
    const idBuscar = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === idBuscar);

    if (!estudiante) {
        return res.status(404).json({ mensaje: "Estudiante no encontrado" });
    }

    res.status(200).json(estudiante);
});

/**
 * POST: Agregar un nuevo estudiante
 * Responderá en: POST http://localhost:3000/estudiantes
 */
app.post('/estudiantes', (req, res) => {
    const { nombre, edad, correo } = req.body;

    // Validación básica por si faltan datos
    if (!nombre || !edad || !correo) {
        return res.status(400).json({ mensaje: "Faltan campos obligatorios (nombre, edad, correo)" });
    }

    // Crear el nuevo objeto asignándole un ID autoincremental básico
    const nuevoEstudiante = {
        id: estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].id + 1 : 1,
        nombre,
        edad,
        correo
    };

    estudiantes.push(nuevoEstudiante);
    res.status(201).json({ mensaje: "Estudiante agregado con éxito", estudiante: nuevoEstudiante });
});

/**
 *  PUT: Actualizar un estudiante existente
 * Responderá en: PUT http://localhost:3000/estudiantes/1
 */
app.put('/estudiantes/:id', (req, res) => {
    const idActualizar = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === idActualizar);

    if (index === -1) {
        return res.status(404).json({ mensaje: "Estudiante no encontrado para actualizar" });
    }

    const { nombre, edad, correo } = req.body;

    // Actualizamos solo los datos que vengan en el cuerpo de la petición
    estudiantes[index] = {
        ...estudiantes[index],
        nombre: nombre || estudiantes[index].nombre,
        edad: edad || estudiantes[index].edad,
        correo: correo || estudiantes[index].correo
    };

    res.status(200).json({ mensaje: "Estudiante actualizado con éxito", estudiante: estudiantes[index] });
});

/**
 *  DELETE: Eliminar un estudiante
 * Responderá en: DELETE http://localhost:3000/estudiantes/1
 */
app.delete('/estudiantes/:id', (req, res) => {
    const idEliminar = parseInt(req.params.id);
    const index = estudiantes.findIndex(e => e.id === idEliminar);

    if (index === -1) {
        return res.status(404).json({ mensaje: "Estudiante no encontrado para eliminar" });
    }

    // Eliminar el estudiante del array
    const estudianteEliminado = estudiantes.splice(index, 1);

    res.status(200).json({ mensaje: "Estudiante eliminado con éxito", estudiante: estudianteEliminado[0] });
});



// ENCENDIDO DEL SERVIDOR 
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000 y listo para recibir peticiones");
});