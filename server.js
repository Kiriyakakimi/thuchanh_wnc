import express from 'express'
import viewEngine from './viewEngine'
import initWebRouter from './webRouter'
import path from 'path'
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
viewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
initWebRouter(app)
app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})
