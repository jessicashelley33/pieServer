//const Express = require('express');
//const router = Express.Router();

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Main Route Hit!")
})

/*router.get("/otherroute", (req, res) => {
    res.send("Other route hit")
})*/

module.exports = router