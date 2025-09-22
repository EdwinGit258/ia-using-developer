import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// Listado de ejemplo de clientes
const clientes = [
	{
		nombre: 'Juan',
		apellidos: 'Pérez Gómez',
		dni: '12345678',
		telefono: '987654321'
	},
	{
		nombre: 'Ana',
		apellidos: 'Ramírez Soto',
		dni: '87654321',
		telefono: '912345678'
	},
	{
		nombre: 'Luis',
		apellidos: 'Torres Díaz',
		dni: '11223344',
		telefono: '998877665'
	}
];

// Endpoint para listar clientes
app.get('/clientes', (req, res) => {
	res.json(clientes);
});
app.listen(PORT, () => {
    console.log(`SERVIDOR INICIADO`);
	console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});

