const mongoose = require("mongoose")

const {MONGO_URL} = process.env

exports.connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(
        console.log(`DB Connection Success`)
    ).catch(error => {
        console.log(`DB Connection Failed`)
        console.log(error)
        process.exit(1)   //1 coz exit is true
    })
}