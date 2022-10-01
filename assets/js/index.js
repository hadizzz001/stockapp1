const urll= "https://stockapp1-ejs.herokuapp.com"; 

$("#add_item").submit(function(event){
    alert('data saved!'); 
});

 
$("#update_item").submit(function(event){
    event.preventDefault();
    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
     

    var request = {
        "url" : `${urll}/api/items/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Item updated successfully!");
        window.location.replace("/");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `${urll}/api/items/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Item deleted successfully!");
                location.reload();
            })
        }

    })
}


 

function OpenNewWindow()  
{  
   window.open("/upload2","","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657");  
}  
 
 

