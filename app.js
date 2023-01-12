const express = require('express')
const exphbrs = require('express-handlebars')
const app = express()
const prod = require('./produtos/lista')


const hbs = exphbrs.create({
    partialsDir:['views/partials']
})


app.set('view engine', 'handlebars')
app.engine('handlebars', hbs.engine)
app.use(express.static('public'))


app.get('/produtos', (req, res)=>{

//     const prod =[
//       {

//         title:'Camiseta',
//         value: '57,80',
//         description: 'Branca P-M-G',
//         more: '/detalhe'

//       },

//       {
//         title:'Blusa',
//         value: '87,90',
//         description: 'Branca P-M-G',
//         more: '/detalhe'


//     },
//     {
//         title:'Calça',
//         value: '55,80',
//         description: 'Branca P-M-G',
//         more: '/detalhe'

//     }



// ]

    res.render('produtos', {prod})
})

app.get('/prod/:id', (req, res)=>{
    const product = prod[req.params.id]
    //console.log(product)
    res.render('prod', {product})
})


app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(3000, ()=>{
    console.log('App funcionando!')
})
