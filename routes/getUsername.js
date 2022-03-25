var express = require('express');
var router = express.Router();
// var Quill = require('quill');
var projectName = "Password Management System";

router.get('/', function(req, res){
    res.render('getUsername', {projectName:projectName, title:'Add Password Form'});
})

module.exports = router; 