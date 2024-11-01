import express, { Request, Response } from 'express';

const app = express(); // Crea una instancia de la aplicación Express
const port = 3002; // Define el puerto

// Define una ruta en la raíz ('/')
app.get('/', (_req: Request, res: Response) => {
   res.send('¡Esta respuesta del servidor es texto plano!');
});

app.get('/html', (_req: Request, res: Response) => {
   res.send('<h1>¡Respuesta del servidor en HTML!</h1>');
});

app.get('/:data', (req: Request, res: Response) => {
   console.log(req, 'request');
   if (req.query) {
      const name = req.query ? req.query.name : null;
      const lastName = req.query ? req.query.lastName : null;
      res.send(`Params: ${req.params.data} => ¡Hola, ${name} ${lastName}!`);
      return;
      console.log(name, 'name');
   }
   res.send('Respuesta servidor');
});

// Inicia el servidor y escucha en el puerto especificado
app.listen(port, () => {
   console.log(`Servidor escuchando en http://localhost:${port}`);
});
