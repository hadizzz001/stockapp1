var Itemdb = require("../model/model2");

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "Can not be empty!"});
        return;
    }
    const item = new Itemdb({
        itemName: req.body.itemName,
        imgurl: req.body.imgurl,  
        instock: req.body.instock,
        price: req.body.price 
    })

    item
    .save(item)
    .then(data=>{
        
        // res.send(data)
        res.redirect('/')
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
        Itemdb.findById(id)
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
    Itemdb.find()
    .then(item=>{
        res.send(item)
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
    Itemdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
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
    Itemdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id} ,maybe id is wrong`})
        }
        else{
            res.send({
                message:"Item was deleted successfully"
            })
        }

    })
    .catch(err=>{
        res.status(500).send({
            message:`Could not delete item with id ${id}`
        });
    });
}
 





exports.find1 = (req, res)=>{ 
    const id = req.params.id;
    Itemdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Cannot delete with id ${id} ,maybe id is wrong`})
        }
        else{ 
            // return data;
            res.send(data);
        }

    })
    .catch(err=>{
        console.log(err);
        res.status(500).send({
            message:`Could not delete item with id ${id}`
        });
    });
}



