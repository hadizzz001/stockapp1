var Urldb = require("../model/model5");

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    const url = new Urldb({
        imgurl: req.body.imgurl
    })

    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add_url1')
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error"
        })
    })
}

exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;
        Urldb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Not find this id=`})
            }
            else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:`error retreiving data with id =`})
        })
    }else{ 
        Urldb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}
 


