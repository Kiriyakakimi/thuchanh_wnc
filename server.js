import express from 'express'
import viewEngine from './viewEngine'
import initWebRouter from './webRouter'
const app = express()
const port = process.env.PORT
viewEngine(app)
initWebRouter(app)
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})
