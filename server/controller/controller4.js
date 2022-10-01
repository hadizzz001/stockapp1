const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const multer = require('multer'); 
var imgModel = require('../model/model2');
const app = express();
   
 
 

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        imgModel.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not find this id= ${id}`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:`error retreiving data with id = ${id}`})
        })
    }else{ 
        imgModel.find()
    .then(item=>{
        res.send(item)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}

 

exports.create = (req, res)=>{
    console.log("entered!")
}
 



