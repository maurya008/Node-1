const app = require("./app")

const {PORT} = process.env
//process.env.PORT

app.listen(PORT, () => "Server is Running at 4000")