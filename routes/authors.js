const express = require('express')
const author = require('../models/author')
const router = express.Router()
const Author = require('../models/author')
// All authors Route
router.get('/',async(req,res)=>{
    try
    {
        const authors = await author.find({})
        res.render('authors/index',{ authors:authors})
    }
    catch
    {
        res.redirect('/')
    }
})
// New author Route
router.get('/new',(req,res)=>{
    res.render('authors/new',{ author: new Author()})
}) 
// Create Author route (post)
router.post('/',async(req,res)=>{
    const author = new Author({
        name: req.body.name
    })
    try
    {
       
        const newAuthor = await author.save()
        //  res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    }
    catch
    {
        res.render('authors/new',{
                        author:author,
                        errorMessage: 'Error creating Author'
                    })
    }
    
})



module.exports= router