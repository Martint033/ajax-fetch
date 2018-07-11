document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    if (isNaN(document.querySelector("input").value) || document.querySelector("input").value.length == 0){
        alert ("Entrer un nombre");
    }
    else{
        const urlPHP = "ex4.php";
        var data = new FormData();
        var elementsForm = document.querySelectorAll(".form-element");
        for (elements of elementsForm){
            data.append(elements.name, elements.value);
        }
        var paramAjax = {
            method : "POST",
            body : data
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

