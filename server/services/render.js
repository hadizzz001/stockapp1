
const axios = require('axios');


exports.homeRoutes2 = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/users`)
    .then(function(response){ 
        res.render('order',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    }) 
}

exports.add_user = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/items`)
    .then(function(response){ 
        res.render('add_user',{items:response.data});
    })
    .catch(err=>{
        res.send(err);
    }) 
}


// exports.add_user = (req,res)=> {
//     res.render('add_user');
// }

exports.update_user = (req,res)=> {
    axios.get(`${process.env.LOCALURL}/api/users`,{params:{id:req.query.id}})
    .then(function(userdata){ 
        res.render("update_user",{user:userdata.data}) 
    })
    .catch(err=>{
        res.send(err);
    })
     
}

exports.update_user1 = (req,res)=> {
    const url1 = `${process.env.LOCALURL}/api/users`;
    const url2 = `${process.env.LOCALURL}/api/items`;
    axios.all([
        axios.get(url1,{params:{id:req.query.id}}),
        axios.get(url2)
    ])
    .then(axios.spread((data1, data2) => {
        // res.status(200).json({ user: data1.data, items: data2.data });
        res.render("update_user",{user:data1.data , items: data2.data }) 
    })); 
     
}
 











exports.homeRoutes = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/items`)
    .then(function(response){ 
        res.render('index',{items:response.data});
    })
    .catch(err=>{
        res.send(err);
    }) 
}
 

exports.add_item = (req,res)=> {
    res.render('add_item');
}
 
 

exports.update_item = (req,res)=> {
    axios.get(`${process.env.LOCALURL}/api/items`,{params:{id:req.query.id}})
    .then(function(itemdata){
        res.render("update_item",{item:itemdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
     
}
 


exports.homeRoutes4 = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/upload2`)
    .then(function(response){ 
        res.render('upload2',{firstName: response.data, lastName: "A Computer Science Portal"});
        
    })
    .catch(err=>{
        res.send(err);
    }) 
}
 









exports.add_url = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/urls`)
    .then(function(response){ 
        res.render('add_url',{imgurl:response.data});
    })
    .catch(err=>{
        res.send(err);
    }) 
}


exports.add_url1 = (req,res) =>{
    axios.get(`${process.env.LOCALURL}/api/urls`)
    .then(function(response){ 
        res.render('add_url1',{imgurl:response.data});
    })
    .catch(err=>{
        res.send(err);
    }) 
}
 