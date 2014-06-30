var app         = require('express')(),
    compression = require('compression'),
    staticPath  = __dirname + '/static/',
    port        = Number( process.env.PORT || 8080 );

app.use(compression());

app.get('/',        function (req, res) { res.sendfile( staticPath + 'index.html' ); });
app.get('/scripts', function (req, res) { res.sendfile( staticPath + 'scripts.js' ); });
app.get('/styles',  function (req, res) { res.sendfile( staticPath + 'styles.css' ); });
app.get('*',        function (req, res) { res.sendfile( staticPath + 'index.html' ); });
app.head('*',       function (req, res) { res.sendfile( staticPath + 'index.html' ); });

app.listen(port, function () { console.log('listening on port: ' + port); });
