const express = require('express')
const exphbrs = require('express-handlebars')
const app = express()


const hbs = exphbrs.create({
    partialsDir:['views/partials']
})


app.set('view engine', 'handlebars')
app.engine('handlebars', hbs.engine)
app.use(express.static('public'))

app.get('/produtos', (req, res)=>{

    const produtos ={
        title:'Camiseta',
        value: '7,80',
        description: 'Branca P-M-G'


    }

    res.render('produtos', {produtos})
})
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('App funcionando!')
})
