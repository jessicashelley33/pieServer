const Express = require('express');
// Imports Express dependency into the application

const app = Express();

// Top level function allowing access to all of its methods

const dbConnections = require('./db');
const controllers = require('./controllers');

dbConnections.authenticate()
    .then(() => dbConnections.sync())
    // .sync() syncs models or schemas to database
    .then(()=> {
        app.listen(3000, () => {
            console.log('[server] is running on 3000')
        })
    })
    .catch((err)=> {
        console.log(`[server] crashed ${err}`)
    })

/*app.listen(3000, () => {
    console.log(`[server] is running`);
})*/
app.use(Express.json());
app.use(controllers.piecontroller);
app.use("/user", controllers.usercontroller);

/*app.use("/test", (req, res) => {
    res.send("Text endpoint hit!")
})*/