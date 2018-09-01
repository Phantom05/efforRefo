var express = require('express');
var router = express.Router();

/* GET users listing. */

router.route('/testing/:userEmail/:userPassword')
  .get(function (req, res, next) {
    var lang = req.headers["accept-language"][0]+req.headers["accept-language"][1];
    console.log('<<<params userEmail: ', req.params.userEmail)
    console.log('<<<params userPassword: ', req.params.userEmail)
    console.log('<<<<query userEmail: ', req.query.userEmail)
    console.log('<<<<query userPassword: ', req.query.userPassword)

    var userEmail = req.query.userEmail;
    var userPassword = req.query.userPassword;

    res.send('email: ' + userEmail+' password: '+userPassword+ 'lang'+lang)
  });

router.route('/')
  .get(function (req, res, next) {
    var lang = req.headers["accept-language"][0]+req.headers["accept-language"][1];
    // res.send('email: '+req.params.userEmail)
    console.log('<<<params userEmail: ', req.params.userEmail)
    console.log('<<<params userPassword: ', req.params.userEmail)
    console.log('<<<<query userEmail: ', req.query.userEmail)
    console.log('<<<<query userPassword: ', req.query.userPassword)

    var userEmail = req.query.userEmail;
    var userPassword = req.query.userPassword;

    res.render('params', {
      userEmail: userEmail,
      userPassword: userPassword,
      lang:lang
    })
    // res.send('respond with a resource');
  });

  router.route('/hello')
  .get(function (req, res, next) {
    res.render('main')
  });

module.exports = router;
