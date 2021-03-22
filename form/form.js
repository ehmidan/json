function mysubmit(){ 
    event.preventDefault()
    var contact={ 
        "firstname":document.getElementById("1").value,
        "lastname":document.getElementById("2").value,
        "lage":document.getElementById("5").value,    
        };

        for (x in contact)
        console.log(contact[x])
        
        if (document.getElementById("3").checked){
            console.log("man");
            
        }
        else {
            console.log("woman");
        }

}


