const express = require('express');
const router = express.Router();
const Transaction = require('../../models/transaction');

router.get('/transactions', (req, res, next)=>{
    Transaction.find({}, 'action')
        .then(data=>res.json(data))
        .catch(next);
});

router.post('/transactions', (req, res, next)=>{
    if(req.body.action){
        Transaction.create(req.body)
            .then(data=>res.json(data))
            .catch(next);
    } else {
        res.json({error:"The input field is empty"});
    }
});

router.delete('/transactions/:id', (req, res, next)=> {
    Transaction.findOneAndDelete({"_id": req.paramas.id})
        .then(data=>res.json(data))
        .catch(next);
});

module.exports = router;