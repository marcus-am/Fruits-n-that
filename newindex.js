// npm init -y makes a .json file
// for backend we often we want to refresh and save so we dont have to stop and start 
// // npm i -D to install as a dev dependency 
// // npm i -D nodemon
// // npm run 'script name'
// // we can create our own scripts as seen on the .json

// const http = require('http') // alows us to use http commands and create a http server, and http comes from node
// const port = 3000;

// const server = http.createServer((req, res) => {  //takes a requirement and a resolution
//     //res.end('Hello'); // this is the resolution we send
//     // res.statusCode = 404; // connection end message
//     // res.end(); // ends connection
//     res.setHeader("Content-Type", "text/html") // to display anything we use setHeader and pass the content, this allows us to look at the 'content' and read it as html/text
//     res.end("<img src='https://pbs.twimg.com/media/Dj8XlmjV4AEzsvr.jpg'>");
// });

// server.listen(3000, () => console.log(`App running on port ${port}`)); // this i sthe port number where the server runs on, and when we run this 
// // a port is a space in your local host, simulation of an environment in your local before it is deployed live

// EXPRESS
// npm i express - install express

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
}) // get means the user will 'get' recievee the information. '/' just shows the default website, '/news/sports' shows something more specific

app.get('/penguins', (req, res) => {
    res.status(204).send();// more express syntax
    res.send('here are the penguins')
}) // now we access the penguins here via localhost/penguins

app.get('/penguins/:name', (req, res) => { //req is what goes into the url, what the browser says to you, and res is what user does with outcome
    //res.send(req.params) 
    res.send(req.query) // :name makes it a dynamic parameter, what the user send
}) // now we access the penguins here via localhost/penguins




app.listen(port, () => console.log(`app running on port ${port}`)); // get the server running on the port, listen to this port



