var express = require('express');
var cors = require('cors');
require('dotenv').config();
let multer=require('multer');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse',multer().single('upfile'),(request,response)=>{
  console.log(request.file);
  
  let resObj={};
  resObj['name']=request.file.originalname;
    resObj['type']=request.file. mimetype;
    resObj['size']=request.file.size;
  response.json(resObj);
})
