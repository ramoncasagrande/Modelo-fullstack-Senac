const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Aguardando conexão");
    mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB conectado!")).catch((error) => console.log(error));

};

module.exports = connectDatabase;