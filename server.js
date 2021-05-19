const express = require('express');

const app = express();

// Ici app est une objet 'Application', instancié pas experessJS

// Exemple d'un middleware
// c'est une unité de traitement qui permet de travailler avec et ou sur les objets  req et res

app.use((req,res, next) => {
    console.log('Middleware1');
    next();
});
// (a,b) => {} est equivalent à  function(a,b) {}
// app.get('/' , function(req, res) => {
// })

// app.get('/' , (req, res) => {
//     res.send('hello Word!')
// })

app.get('/', (req,res, next) => {
    next('Error');
});

app.use((err,req,res, next) => {
    res.status(500).json({err})
});




// Pour faire une route POST
// =========================
// app.post('URI' , (req, res) => {
//     implementationici
// })

// Pour faire une route DELETE
// =========================
// app.delete('URI' , (req, res) => {
//     implementationici
// })
// 
// etc.....



app.listen(8080, ()=>{
    console.log(" I'm ready");
})