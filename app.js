var fs = require('fs');
var express = require('express');
var app = express();
var multer  = require('multer');

var upload = multer({ dest: 'uploads/' });



app.use('/public', express.static(process.cwd() + '/public'));

app.route('/')
   .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    });

app.post('/post',upload.single("file"),
    function(req,res,next)
    {
      if(req.file)
      {
        //console.log(res.headers);
        res.json(req.file);
      }
      else
        
    }
);

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});