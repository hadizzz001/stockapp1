 
const urll= "https://stockapp1-ejs.herokuapp.com"; 



$("#update_user").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    // console.log(unindexed_array)
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })  

    var request = {
        "url" : `${urll}/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){ 
        alert("Data Updated Successfully!");
        window.location.replace("/order");
    }) 

})

 

if(window.location.pathname == "/order"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(event){


        var datas = $(this).attr("data-id");
        const myArray = datas.split(",");
        let id = myArray[0];
        let qtyy = myArray[1];
        let iid = $.trim(myArray[2]);  
        

        var request = {
            "url" : `${urll}/api/items/${iid}`,
            "method" : "GET"
        }  




        if(confirm("Do you really want to delete this record?")){ 
            $.ajax(request).done(function(response){  

                var data = {
                    instock: parseInt(qtyy) + parseInt(response.instock)
                }  
                var request2 = {
                    "url" : `${urll}/api/items/${iid}`,
                    "method" : "PUT",
                    "data" : data
                } 

                $.ajax(request2).done(function(response){  
                    var request3 = {
                        "url" : `${urll}/api/users/${id}`,
                        "method" : "DELETE"
                    }

                    $.ajax(request3).done(function(response){ 
                        console.log("Data Deleted Successfully! "); 
                        location.reload();
                    })
                })



            });
            $.ajax(request).fail(function(response){
                var request3 = {
                    "url" : `${urll}/api/users/${id}`,
                    "method" : "DELETE"
                }

                $.ajax(request3).done(function(response){ 
                    console.log("Data Deleted Successfully! "); 
                    location.reload();
                })
            })
        }






    })
}


var todaydate = new Date();
var day = todaydate.getDate();
var month = todaydate.getMonth() + 1;
var year = todaydate.getFullYear();
var datestring = day + "/" + month + "/" + year;
document.getElementById("odate").value = datestring;


var total ,price,qty,max,itmid; 
$('#sltid').change(function() {
    var idx = this.selectedIndex;
    
    $("#qty").val(0); 
    $("#total").val(0);     

    $("select#itemidx").prop('selectedIndex', idx);
    $("select#itemqty").prop('selectedIndex', idx);
    $("select#itemid").prop('selectedIndex', idx);
    price = $('select#itemidx').find(":selected").text();
    max = $('select#itemqty').find(":selected").text();
    itmid = $('select#itemid').find(":selected").text();
    const input = document.getElementById("qty");
    input.setAttribute("max",max); 
    qty =  $("#qty").val();  
    $("#price").val(price);
    $("#itmid").val(itmid); 

    const inputHandler = function(e) { 
        
        qty =  e.target.value;
        total = qty * price;
        $("#total").val(total);
        $("#instock").val(max - qty);
    }
    
    input.addEventListener("input", inputHandler);


});



 

$("#add_user").submit(function(event){
    // alert('data saved!')
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    // console.log(unindexed_array)
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
        
    });
    console.log(itmid);

    var request = {
        "url" : `${urll}/api/items/${itmid}`,
        "method" : "PUT",
        "data" : data
    } 

    var request2 = {
        "url" : `${urll}/api/users`,
        "method" : "POST",
        "data" : data
    } 

    $.ajax(request).done(function(response){ 
    })

    $.ajax(request2).done(function(response){
        alert("Order added Successfully!");
        window.location.replace("/order");
    })

})

window.onload = function() {
    alert(123);
    //var input = document.getElementById("myinputbox").focus();
  }