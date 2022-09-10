const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const baseRoute = __dirname + "/dist/pokemon-database-ui"
const dataPath = baseRoute + "/assets/data/";


app.use(express.static(baseRoute));

// let apiRouter = require("./api.js");

// Middleware, if the client requests html load the Angular app and let the router deal with it
app.use((req, res, next) => {
    console.log("the middleware ran")
    if(req.accepts("text/html")){
        console.log("we're getting html bro");
        res.sendFile(path.join(baseRoute + "/index.html"));
    } else {
        next();
    }
});

// otherwise we move on to all other request types
app.get("/pokemon", (req, res) => {
    console.log("a call was made to pokemon");
    res.format(
        {
            "application/json" : function(){
                res.status(200).send(require(dataPath + "pokemon.json"))
            }
        }
    );
});

app.get("/regions", (req, res) => {
    console.log("a call was made to regions");
    res.format(
        {
            "application/json" : function(){
                res.status(200).send(require(dataPath + "regions.json"))
            }
        }
    );
});



const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));