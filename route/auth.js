const express = require('express');
const router = express.Router();
const conn = require('../lib/database');
const helper = require('../lib/helper');

function redirectPage(req, res, next) {
    if (req.session.user) {
        res.redirect('/product');
    } else {
        next();
    }
}

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
});

router.get('/login', redirectPage, (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    if (req.body.email === '' && !req.body.password === '') {
        
        res.send('auth/login', {
            message: 'Please fill email and password!'
        });

    } else {
        
        sql = "SELECT userID, name, email, gender FROM users WHERE email='"+ req.body.email +"' AND password='"+ req.body.password +"' LIMIT 1";
        
        conn.query(sql, (err, results) => {
            if (err) {

                throw err;

            } else if (results.length > 0) {

                req.session.user = results;             
                res.redirect('/product');

            } else {

                res.render('auth/login', {
                    message: 'User not found!'
                });
            }            
        });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(function() {
        console.log('User logout!');
    });
    res.redirect('/login');
});

router.get('/register', redirectPage, (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    let userID = new Date().getTime();
    
    let timestamp = helper.generateTimeStamp();

    let data = {
        userID: userID,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        created_date: timestamp
    };
    let sql = "INSERT INTO users SET ?";
    conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect('/login');
    });
});

module.exports = router;