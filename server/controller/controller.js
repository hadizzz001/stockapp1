var Userdb = require("../model/model");

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    const user = new Userdb({
        clientName: req.body.clientName,
        item: req.body.item,
        itm_id: req.body.itm_id,
        clientPhone: req.body.clientPhone,
        clientAddress: req.body.clientAddress,
        qty: req.body.qty,
        price: req.body.price,
        total: req.body.total,
        odate: req.body.odate
    })

    user
    .save(user)
    .then(data=>{
        res.send(data)
        // res.redirect('/order')
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
        Userdb.findById(id)
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
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error Occurred while retriving data"})
    })
}
}

exports.update = (req, res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(404).send({message:`Can not update user with ${id}, maybe user not found`})

        }
        else{
            res.send(data)
        }
    })
.catch(err=>{
    res.status(500).send({message:"Error update user"})
})
}



exports.delete = (req, res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id} ,maybe id is wrong`})
        }
        else{
            res.send({
                message:"User was deleted successfully"
            })
        }

    })
    .catch(err=>{
        res.status(500).send({
            message:`Could not delete user with id ${id}`
        });
    });
}


 
 


