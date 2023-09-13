# Microservicio de Reservas (Booking)

Este microservicio Node.js proporciona operaciones CRUD para gestionar reservas en una base de datos. Utiliza Express.js como marco de aplicación web y se conecta a una base de datos para almacenar y recuperar información sobre las reservas.

## Configuración

Antes de ejecutar el microservicio, asegúrate de seguir estos pasos de configuración:

1. **Instalación de dependencias**: Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

   ```bash
   npm install
   
Ejecución
Una vez que hayas completado la configuración, puedes iniciar el microservicio ejecutando el siguiente comando:
  npm run dev

Endpoints
El microservicio proporciona los siguientes endpoints para gestionar las reservas:

GET api/booking: Obtiene todas las reservas almacenadas en la base de datos.

GET api/booking/:id: Obtiene una reserva específica por su ID.

POST api/booking: Crea una nueva reserva. Debe proporcionar los datos de la reserva en el cuerpo de la solicitud en formato JSON.

PUT api/booking/:id: Actualiza una reserva existente por su ID. Debe proporcionar los datos actualizados en el cuerpo de la solicitud en formato JSON.

DELETE api/booking/:id: Elimina una reserva existente por su ID.
