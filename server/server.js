const express = require('express'),
path = require('path')

localhostConnectionUrl = 'mongodb://localhost:27017/applicationdb?authSource=admin'


///connectionUrl = 'mongodb://appuser2:appuser2@localhost:27017/applicationdb'
 
connectionUrl = 'mongodb+srv://appuser:appuser@csc435-iiivf.mongodb.net/applicationdb?retryWrites=true&w=majority'





const app = express()
const PORT = process.env.PORT || 3000;

var usersApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

//--------------
//var MongoClient = require('mongodb').MongoClient;
//
//var uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test";
//MongoClient.connect(uri, function(err, client) {
//   const collection = client.db("applicationdb").collection("devices");
//   // perform actions on the collection object
//   client.close();
//});
//-------------

//mongoose.connect(process.env.MONGODB_URI || connectionUrl);
//mongoose.connect(localhostConnectionUrl);
//mongoose.connect(connectionUrl);

//------------------



//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGOLAB_URI || localhostConnectionUrl );
mongoose.connect(connectionUrl );
//mongoose.connect(localhostConnectionUrl );
//
//-----
var promise = mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
});
//-----



//------------
//const db = process.env.MONGODB_URI;
//const db = localhostConnectionUrl;
//
//
//const connectDB = async () => {
//	  console.log("connecting to db" + db)
//  try{
//    await mongoose.connect(db, {
//      useUnifiedTopology: true,
//      useNewUrlParser: true
//    });
//    console.log("MongoDB is Connected...");
//  } catch (err) {
//    console.log("MongoDB is notconnected...");
//    console.error(err.message);
//    process.exit(1);
//  }
//};
//-------------------

mongoose.connection.on('error', () => {
	console.error('MongoDB Connection Error. Please make sure that MongoDB is running.')
	process.exit(1)
})

const logger = (req, res, next) => {
    console.log(`${req.method} request HITHERE for '${req.url}'`)
    next()
}

// switched these around
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

/*app.get('/', (req, res) => {
    sendHTMLpage(req, res);
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});*/


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
