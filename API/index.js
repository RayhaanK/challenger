const {express, routes} = require('./Controller')
const app = express()
const port = +process.env.PORT || 3000

// we need to allow them to use static folder
app.use(express.static('./static'))
app.use(
    express.urlencoded({
        extended: false 
    }),
    routes
)
routes.get('^/$|/challenger', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './static/HTML/index.html'))
})

app.listen(port, ()=>{
    console.log(`The server is runnong on port ${port}`);
})