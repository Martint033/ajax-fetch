document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    if (isNaN(document.querySelector("input").value) || document.querySelector("input").value.length == 0){
        alert ("Entrer un nombre");
    }
    else{
        const urlPHP = "ex1.php";
        const data = { choixTable: document.querySelector("input").value };
        var paramAjax = {
            method : "POST",
            body : JSON.stringify(data),
            headers : new Headers ({
                "Content-type" : "application/json"
            })
        };

        fetch(urlPHP, paramAjax).then(function(response){
            return response.json();
        }).then (function (response){
            var html = "";
            for (index in response){
                html += "<p>" + response[index] + "<p>";
            }
            
                document.getElementById("result").innerHTML = html;
            
        })
    }
});



// function multiplicateur(){
//         fetch("ex1.php"
//         // , {
//         //     method:"POST",
//         //     body:JSON.stringify()
//         // }
//     ).then(function (response){
//                 return response.text();
//             }).then(function(response){
//                 console.log("bon...");
//                 document.getElementById("result").innerHTML += response;     
//             })
//     }

//     multiplicateur();

