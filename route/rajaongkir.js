var http = require("https");
const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
});

router.get('/api/province', (request, response) => {
    var options = {
        "method": "GET",
        "hostname": "api.rajaongkir.com",
        "port": null,
        "path": "/starter/province",
        "headers": {
            "key": "4840dbba48b3106fd41877c1701149ae"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            response.json(JSON.parse(body.toString()));
        });
    });
    
    req.end();
});

router.get('/api/province/:id', (request, response) => {
    var path = request.path.split('/');
    var options = {
        "method": "GET",
        "hostname": "api.rajaongkir.com",
        "port": null,
        "path": "/starter/province?id=" + path,
        "headers": {
            "key": "4840dbba48b3106fd41877c1701149ae"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            response.json(JSON.parse(body.toString()));
        });
    });
    
    req.end();
});

router.get('/api/city', (request, response) => {
    var options = {
        "method": "GET",
        "hostname": "api.rajaongkir.com",
        "port": null,
        "path": "/starter/city",
        "headers": {
            "key": "4840dbba48b3106fd41877c1701149ae"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            response.json(JSON.parse(body.toString()));
        });
    });
    
    req.end();
});

router.get('/api/city/:id', (request, response) => {
    var path = request.path.split('/');
    var options = {
        "method": "GET",
        "hostname": "api.rajaongkir.com",
        "port": null,
        "path": "/starter/city?id=" + path,
        "headers": {
            "key": "4840dbba48b3106fd41877c1701149ae"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            response.json(JSON.parse(body.toString()));
        });
    });
    
    req.end();
});

module.exports = router;