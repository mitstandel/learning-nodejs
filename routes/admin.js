const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        title:'Add Product', 
        path: '/admin/add-product', 
        addProduct: true,
        productCss: true,
        formsCss: true
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title})
    res.redirect('/');
});

module.exports = {
    routes: router,
    products: products
};