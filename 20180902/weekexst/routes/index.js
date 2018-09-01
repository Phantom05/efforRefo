var express = require('express');
var router = express.Router();

/* GET home page. */

// router.route('/:userEmail')
//   .get(function(req, res, next) {
//     let uName = req.params.userEmail;
//   res.send('userName: '+uName)
// });


router.route('/')
  .get(function(req, res, next) {
    var lang = req.headers["accept-language"][0]+req.headers["accept-language"][1];
    // var lang = req.headers["accept-language"]
  res.render('index', { title: 'Express' ,lang:lang});
});

module.exports = router;
