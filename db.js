const mongoose = require ('mongoose');

const mongoURI = "mongodb+srv://NewOne:Durgesh%402022@cluster0.lvsxb5w.mongodb.net/inotebooktest"

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo Successfully");
    })

}

module.exports = connectToMongo;