const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const baseRoute = __dirname + "/dist/pokemon-database-ui"

app.use(express.static(baseRoute));

let apiRouter = require("./api.js");
app.use("/api", apiRouter);

app.get('/*', (req, res) => res.sendFile(path.join(baseRoute + "/index.html")));



const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));