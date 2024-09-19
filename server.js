import express from 'express'
import dotenv from 'dotenv/config'
import myDateTime from './date'
import getURL from './getURL'
import viewEngine from './viewEngine'
const app = express()
const port = process.env.PORT
viewEngine(app)
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})
app.get('/',(req,res)=>{
    res.render("home.ejs")
})
app.get('/about',(req,res) =>{
    res.render("about.ejs")
})
app.get('/date',(req,res) =>{
    res.send(myDateTime())
})
app.get('/geturl',(req,res) =>{
    res.send(getURL.getParamsURL(req) + "<br>" + getURL.getPath(req))
})
app.get('/ejs',(req,res)=>{
    res.render("test")
})
