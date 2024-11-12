const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/templeData').then(()=>{
    console.log("Database is connected successfully");    
}).catch((e)=>{
    console.log(e);
})