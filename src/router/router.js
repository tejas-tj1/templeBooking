const express=require('express');
const app=express();


const hallBook=require('../models/hallModel');
const shopBook=require('../models/shopModel');
const vipBook=require('../models/vipsModel');
const Router=new express.Router();

Router.get('/',(req,res)=>{
    res.render('home');
});

Router.get('/booking',(req,res)=>{
    res.render('booking');
})
Router.get('/about',(req,res)=>{
    res.render('about');
})
Router.get('/donation',(req,res)=>{
    res.render('donation');
})
Router.get('/events',(req,res)=>{
    res.render('events');
})
Router.get('/contact',(req,res)=>{
    res.render('contact');
})

Router.get('/booking/vipBooking',(req,res)=>{
    res.render('vip')
})
Router.get('/booking/shopBooking',(req,res)=>{
    res.render('shop');
})
Router.get('/booking/hallBooking',(req,res)=>{
    res.render('hall');
})


Router.post('/booking/vipBooking',async (req,res)=>{
    
    const user=vipBook({
        uname:req.body.username,
        address:req.body.address,
        adhar:req.body.adhar,
        mobile:req.body.mobile,
        email:req.body.email,
        date:req.body.date
    });
    const data=await user.save();
    // res.send(`Congratulations ${user.uname} Your seat is booked for date ${user.date}`);
    res.render('token',{user});
    console.log(user);
    
})


Router.post('/booking/shopBooking',async (req,res)=>{
    const user=shopBook({
        uname:req.body.username,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        date:req.body.date,
        category:req.body.category,
        no:rno()
    })
    function rno(){
        const no=Math.floor(Math.random*10);
        console.log(no);
        
    }
    const data=await user.save();
    console.log(user);
    // res.send(`Your Shop is booked for the date ${user.date}`);
    res.render('token',{user});
})


Router.post('/booking/hallBooking',async (req,res)=>{
    
    try{
       
        const user=hallBook({
            uname:req.body.username,
            address:req.body.address,
            mobile:req.body.mobile,
            date:req.body.date,
            purpose:req.body.purpose,
            size:req.body.size
        })
        
        const data=await user.save();
        console.log(user);
        res.send(`<h1>Your Hall is Booked for Date ${user.date}</h1>`)
    }catch(e){
        res.send("<h1>please Dont Enter Duplicate Details<h1>")
    }
    
})






module.exports=Router;