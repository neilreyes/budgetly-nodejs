const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// Register Handle
router.post('/register', (req, res)=>{
    const { name, email, password, password2 } = req.body;

    let errors = [];
    
    // Check required fields
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill in all the fields'});
    }

    // Check password match
    if(password !== password2){
        errors.push({msg: 'Passwords do not match'});
    }

    // Check password length
    if(password.length < 6){
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    // Check if 
    if(errors.length > 0){
        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
    } else {
        res.send('pass');
    }

});

module.exports = router;