const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/user")
.then(()=>{
    console.log("the connection is successful")
})
.catch((error)=>{
    console.log(`there is some error in the connection : ${error}`);
})