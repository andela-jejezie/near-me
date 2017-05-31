const socketIO = require('socket.io');
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());

// require('./routes/auth')(app);

var server = http.createServer(app);
var io = socketIO(server);


io.use(socketioJwt.authorize({
  secret: process.env.JWT_SECRET.toString(),
  handshake: true
}));
io.on('connection', function(socket) {
    console.log('new server connection');
  
});
server.listen(port, ()=> {
    console.log(`server is up on ${port}`);
});