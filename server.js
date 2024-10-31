import express from 'express'
import viewEngine from './viewEngine'
import initWebRouter from './webRouter'
import path from 'path'
import bodyParser from 'body-parser'
import session from 'express-session'
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.set('view engine','ejs')
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
viewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
initWebRouter(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
