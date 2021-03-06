const express = require('express'),
path = require('path')

localhostConnectionUrl = 'mongodb://localhost:27017/applicationdb?authSource=admin'

const app = express()
const PORT = process.env.PORT || 3000;

var usersApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var promise = mongoose.connect(process.env.MONGODB_URI || localhostConnectionUrl, {
  useNewUrlParser: true,
});


mongoose.connection.on('error', () => {
	console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
	process.exit(1)
})

const logger = (req, res, next) => {
    console.log(`${req.method} request HITHERE for '${req.url}'`)
    next()
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger)
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', usersApi)

const sendHTMLpage = (req, res) => {
    bundle = ``

    //development mode gets bundle.js from webpack-dev-server at localhost:8080
    if (process.env.NODE_ENV == 'development') {
        bundle = `<script src="http://localhost:8080/assets/bundle.js"></script>`
    } else {
        bundle = `<script src="assets/bundle.js"></script>`
    }

    return_html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Served</title>
            </head>
            <body>
                <div id="react-container"></div>
                ` + bundle + `
            </body>
        </html>`

    res.status(200).send(return_html)
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))


  })

}

app.listen(PORT, function () {
    console.log('Application listening on port ' + (process.env.PORT || 3000))
})

//module.exports = app
