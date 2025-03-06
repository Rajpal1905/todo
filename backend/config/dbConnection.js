const mongoose = require('mongoose')

const url = process.env.MONGODB_URL

exports.dbConnect = () =>{
   
        mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology:true
    }).then(()=>{console.log("DB connetion done")})
     .catch ((err)=>{
        console.error("An error occured")
        process.exit(1)
     });
   
}