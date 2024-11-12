const express=require('express');
const app=express();
const port=process.env.port || 3000;
const path=require('path');
const hbs=require('hbs');
require('./db/conn');

const Router=require('./router/router');
const hallBook=require('./models/hallModel');
const shopBook=require('./models/shopModel');
const vipBook=require('./models/vipsModel');

const staticPath=path.join(__dirname,'../public'); 
const viewPath=path.join(__dirname,'../src/templates/views');
const partialPath=path.join(__dirname,'../src/templates/partials');

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',viewPath);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(Router);

hbs.registerPartials(partialPath);

app.listen(port,()=>{
    console.log(`Server is Running at the Port ${port}`);
    
}) 