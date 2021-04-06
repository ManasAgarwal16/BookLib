const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index')
require('./db/conn');
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))



app.use('/',indexRouter)
app.listen(port,()=>{
    console.log(`connection at port no. ${port}`);
})
