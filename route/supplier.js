const express = require('express');
const router = express.Router();
const conn = require('../lib/database');
const authenticated = require('../middlewares/authenticated');

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
});

router.get('/supplier', authenticated, (req, res) => {
    let path = req.path.split('/');
    let sql =   "SELECT supplierID, name, address, subdistrict, city, country, " +
                "phone, npwp, email, register_date FROM suppliers";
    conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('suppliers/supplier_view', {
            results: results,
            page: path[1],
            session: req.session.user
        });
    });    
});

router.get('/supplier/add', authenticated, (req, res) => {
    let path = req.path.split('/');
    res.render('suppliers/add_supplier', {
        page: path[1],
        session: req.session.user
    });
});

module.exports = router;