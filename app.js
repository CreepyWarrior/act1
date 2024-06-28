//conexion de Mongo
const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/Libreria'
//promesa de que si funciona la base
mongoose.connect(url_db)
.then(() => {
    console.log("JALA")
}).catch((err)=>{
    console.log("Valio cheto")
})
//esquema de la base de datos
const esquema_libros = new mongoose.Schema({
    name : {type : String},
    price : {type : Number},
    date : {type : String},
    editorial : {type : String},
    author : {type : String},
    genre : {type : String},
    numpage : {type : Number}
})

//creando una coleccion(Tabla)
const modelo_libros = new mongoose.model(
    'Libros',
    esquema_libros
)
//meter datos a la tabla
modelo_libros.create({
    name : "Hyrule Inciclopedy",
    price : 500,
    date : "19/05/2012",
    editorial : "Nintendo",
    author : "Miyamoto",
    genre : "Informative, entreteiment",
    numpage : 200})
