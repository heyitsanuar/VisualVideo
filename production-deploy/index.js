'use strict'

let app      = require ('./app');
let port     = process.env.PORT || 3000; //If environment variable exists

app.listen(port, () => console.log('Server running on port '+ port));