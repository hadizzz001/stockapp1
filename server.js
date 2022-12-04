const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer');  
const upload = require("./utils/multer");
const {cloudinary} = require("./utils/cloudinary");
const { all } = require('async'); 

var fs = require('fs'); 
require('dotenv/config');

const connectDB = require('./server/database/connection')

const app = express();
const route1 = express.Router(); 

dotenv.config({path:'config.env'})
//const PORT = process.env.PORT || 8000

 

app.use(morgan('tiny'));
connectDB();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use(express.static('uploads'));
// app.use('/js',express.static(path.resolve(__dirname,"uploads")))

app.use('/',require('./server/routes/router')) 
// var Url = mongoose.model("Urldb", Urldb);
var Urldb = require("./server/model/model5");
var Userdb = require("./server/model/model5");
var Itemdb = require("./server/model/model5");
const { route } = require('./server/routes/router');

app.post('/upload2', upload.single('img') , async (req, res, next)=>{ 

    // console.log("file details: ", req.file);

    // cloudinary.v2.uploader.upload(file, options, callback);
    const result = await cloudinary.uploader.upload(req.file.path); 
    // console.log("result: ", result.url);
    const post_details = {
        title: req.body.title,
        image: result.public_id
    }
    // res.send(`Full name is:${req.body.fname} .`);
    // res.send("<script>window.close();</script > ")
    // res.send("<script>document.getElementById('txtid').value = totalScore;</script > ")
    // res.send("<script>alert(123);</script > ")

    // var myData = new Url(req.body);
    // myData.save()
    // .then(item => {
    //   res.send("item saved to database");
    // })
    // .catch(err => {
    //   res.status(400).send("unable to save to database");
    // });



    if(!req.body){
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    const user = new Urldb({
        imgurl: result.url
    })

    user
    .save(user)
    .then(data=>{
        //  res.send(data)
        res.redirect('/add_url') 

    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    })
 
    // res.render('add_item', {
    //     imgurlz : result.url
    // });

});

  




 

var port = process.env.PORT || '3000'
app.listen(port, err => {
    if (err)
        throw err
        console.log(`Server is running on http://localhost:` + port)
})


 