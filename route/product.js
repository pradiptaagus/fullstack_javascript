const express = require('express');
const router = express.Router();
const conn = require('../lib/database');
const authenticated = require('../middlewares/authenticated');

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now());
    next()
});

router.get('/product', authenticated, (req, res) => {
	let sql = "SELECT productID, name, price FROM products";
	let path = req.path.split('/');
	conn.query(sql, (err, results) => {
		if (err) throw err;
		res.render('products/product_view', {
			results: results,
			page: path[1],
			session: req.session.user
		});
	});
});

router.get('/product/add', authenticated, (req, res) => {
	let path = req.path.split('/');
	res.render('products/add_product', {
		page: path[1],
		session: req.session.user
	});
});

router.post('/product', authenticated, (req, res) => {
	let productID = new Date().getTime();
	let data = {
		productID: productID,
		name: req.body.name, 
		price: req.body.price
	};
	let sql = "INSERT INTO products SET ?";
	conn.query(sql, data, (err, results) => {
		if (err) throw err;
		res.redirect('/product');
	});
});

router.get('/product/edit/:id', authenticated, (req, res) => {
	let path = req.path.split('/');
	let sql = "SELECT productID, name, price FROM products WHERE productID='"+ req.params.id +"'";
	conn.query(sql, (err, results) => {
		if (err) throw err;
		res.render('products/edit_product', {
			data: results,
			page: path[1],
			session: req.session.user
		});
	});
});

router.post('/product/:id', authenticated, (req, res) => {
	let sql = "UPDATE products SET name='" + req.body.name + "', price='"+ req.body.price +"' WHERE productID='"+ req.params.id +"' ";
	conn.query(sql, (err, results) => {
		if (err) throw err;
		res.redirect('/product');
	});
});

router.get('/product/delete/:id', authenticated, (req, res) => {
	let sql = "DELETE FROM products WHERE productID='"+req.params.id+"'";
	conn.query(sql, (err, results) => {
		if (err) throw err;
		res.redirect('/product');
	});
});

module.exports = router;