import express from 'express'
import viewEngine from './viewEngine'
import initWebRouter from './webRouter'
import initApiRouter from './api/apiRoute'
import path from 'path'
import bodyParser from 'body-parser'
import session from 'express-session'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
app.use((req, res, next) =>{
    res.locals.user = req.session.user || null;
  next();
});
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')
const port = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
viewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
initWebRouter(app)
initApiRouter(app)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
