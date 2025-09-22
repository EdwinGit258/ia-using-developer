# ia-using-developer

Servidor Express de ejemplo para listar clientes

## Uso

1. Instala las dependencias:
	 ```sh
	 npm install
	 ```
2. Inicia el servidor:
	 ```sh
	 npm start
	 ```
3. Accede al endpoint de clientes:
	 - [http://localhost:3000/clientes](http://localhost:3000/clientes)

## Endpoint disponible

- **GET** `/clientes`
	- Devuelve un listado de clientes de ejemplo en formato JSON:
		```json
		[
			{
				"nombre": "Juan",
				"apellidos": "Pérez Gómez",
				"dni": "12345678",
				"telefono": "987654321"
			},
			{
				"nombre": "Ana",
				"apellidos": "Ramírez Soto",
				"dni": "87654321",
				"telefono": "912345678"
			},
			{
				"nombre": "Luis",
				"apellidos": "Torres Díaz",
				"dni": "11223344",
				"telefono": "998877665"
			}
		]
		```

## Requisitos
- Node.js 18 o superior
- npm

---

Desarrollado para fines educativos en SENATI - Fullstack Developer Software