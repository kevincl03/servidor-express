"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3002;
app.get('/', (_req, res) => {
    res.send('¡Esta respuesta del servidor es texto plano!');
});
app.get('/html', (_req, res) => {
    res.send('<h1>¡Respuesta del servidor en HTML!</h1>');
});
app.get('/:data', (req, res) => {
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
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map