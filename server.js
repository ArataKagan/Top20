const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", (req, res, next) => {
//     res.send("Welcome to TV list app");
// })


// app.get('/api/hello', (req, res) => {
//     res.send({ express: 'Hello from Express'});
// });

// app.post('/api/world', (req, res) => {
//     console.log(req.body);
//     res.send(
//         `I received your POST request. This is what you sent me: ${req.body.post}`,
//     );
// });

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));