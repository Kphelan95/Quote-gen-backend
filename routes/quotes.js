const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');


router.get('/', async (req,res)=> {
    try{
        const Quotes = await Quote.find();
        res.json(Quotes);
    }catch(err){
        res.json({message:err});
    }
});

router.delete('/:quoteID', async (req,res)=> {
    try{
        const removedPost = await Quote.deleteOne({_id: req.params.quoteID});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});


router.post('/', async (req,res)=>{
    const quote = new Quote({
        quote: req.body.quote,
        author: req.body.author
    });

   try{
    const savedQuote = await quote.save();
    res.json(savedQuote);
   }catch(err){
        res.json({message:err});
   }
});

router.patch('/:quoteID',async (req,res)=>{
    try{
        console.log(req.params.quoteID);
        console.log(req.body.quote);
        const updatedQuote = await Quote.updateOne(
            {_id: req.params.quoteID},
            {$set:{quote: req.body.quote, author:req.body.author}}
            );
        res.json(removedQuote);
    }catch(err){
        res.json({message:err});
    }
})

module.exports = router;