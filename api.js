const express = require('express');

let router = express.Router();
const dataPath = __dirname + "/dist/pokemon-database-ui/assets/data/";


router.get("/pokemon", (req, res) => {
    console.log("a call was made to pokemon");
    res.status(200).send(require(dataPath + "pokemon.json"))
});

router.get("/regions", (req, res) => {
    console.log("a call was made to regions");
    res.status(200).send(require(dataPath + "regions.json"))
});

module.exports = router;
