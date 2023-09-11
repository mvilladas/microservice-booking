const mongoose = require("mongoose");

const dbConnect = () =>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(
        () => { console.log("Conexión exitosa a db") },
        err => { console.log("Error en la conexión con la base de datos: "+err) }
    );
};

module.exports = dbConnect;