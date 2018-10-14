let express = require('express');
let router = express.Router();
let Book = require('../models/book');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
// GET SINGLE BOOK
router.get('/api/books/:book_id', function(req, res, next){
    res.end();
});

router.post('/api/books', function(req, res, next){
    let book = new Book();
    book.title = req.body.name;
    book.author = req.body.author;
    // book.published_date = new Date(req.body.published_date);

    book.save(function(err){
        if(err){
            console.error(err);
            res.json({result: 0});
            return;
        }
        res.json({result: 1});
    });
});

// GET BOOK BY AUTHOR
router.get('/api/books/author/:author', function(req, res, next){
    res.end();
});

// CREATE BOOK
router.post('/api/books', function(req, res, next){
    res.end();
});

// UPDATE THE BOOK
router.put('/api/books/:book_id', function(req, res, next){
    res.end();
});

// DELETE BOOK
router.delete('/api/books/:book_id', function(req, res, next){
    res.end();
});

// GET ALL BOOKS
router.get('/api/books', function(req,res){
    Book.find(function(err, books){
        if(err) return res.status(500).send({error: 'database failure'});
        res.json(books);
    })
});

module.exports = router;
