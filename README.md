# piggy_backend

Backend de Piggy Finanzas,


Esta armado el CRUD de las transacciones;

Crear transaccion>

Cabezales> JSON
HTTP> POST
Ejemplo Body: 
{
    "type": "i",
    "description": "Aguinaldo",
    "amount": 6000,
    "category": "Sueldo"
    
}

Eliminar una transaccion>

Cabezales> JSON
HTTP> DELETE
https://url/api/v1/transactions/:id
Ejemplo
DELETE a https://piggy-srv.herokuapp.com/api/v1/transactions/5fde2310dc348d00177941e3

Obtener una lista de Transacciones
HTTP> GET
Ejemplo GET https://piggy-srv.herokuapp.com/api/v1/transactions/
Devuelve una lista de transacciones
Ejemplo de la resupuesta

    "count": 2,
    "data": [
        {
            "_id": "5fde2e66ece2510017c19bef",
            "type": "e",
            "description": "Seguro",
            "amount": 18000,
            "category": "Auto",
            "createdAt": "2020-12-19T16:46:30.895Z",
            "__v": 0
        },
        {
            "_id": "5fde2fbaece2510017c19bf0",
            "type": "i",
            "description": "Aguinaldo",
            "amount": 6000,
            "category": "Sueldo",
            "createdAt": "2020-12-19T16:52:10.747Z",
            "__v": 0
        },
       
    ]
}

UPDATE
Cabezales> JSON
HTTP> PUT
Parametros: Id de la transaccion
Ejemplo UPDATE https://piggy-srv.herokuapp.com/api/v1/transactions/5fde2310dc348d00177941e3
Body
{
    "type": "i",
    "description": "Aguinaldo",
    "amount": 6000,
    "category": "Sueldo"
    
}
