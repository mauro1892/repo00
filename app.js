const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const routerMain = require('./routes/routerMain');
const routerLogin = require('./routes/routerLogin');
const routerRegister = require('./routes/routerRegister');

app.use(express.static('public'));

app.use("/", routerMain);
app.use("/login", routerLogin);
app.use("/register", routerRegister);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname+'/views/', 'home.html'));
//   })
// app.get('/home', (req, res) => {
//   res.sendFile(path.join(__dirname+'/views/', 'home.html'));
// })
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname+'/views/', 'login.html'));
// })
// app.get('/register', (req, res) => {
//   res.sendFile(path.join(__dirname+'/views/', 'register.html'));
// })


app.listen(port, ()=>{
    console.log('Esta corriendo el servidor en http://localhost:' + port + '/');
});