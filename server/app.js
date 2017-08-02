const app = require('express')()
const index = require('./routes/index')

require('./config/passport')()
require('./config/express')(app)

app.use('/', index)

require('./config/error-handler')(app)
module.exports = app
