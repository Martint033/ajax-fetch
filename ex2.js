// Je recupère l'evenement de submit du formulaire
document.querySelector("form").addEventListener("submit", function(e){
    // J'annule le traitement automatique du submit
    e.preventDefault();

    // Je teste si la valeur et un chiffre et qu'elle n'est pas vide
    if (isNaN(document.querySelector("input").value) || document.querySelector("input").value.length == 0){
        alert ("Entrer un nombre");
    }
    else{
        // l'Url du fichier PHP
        const urlPHP = "ex2.php";
        var data = new FormData();
        // les données qu'on va envoyer on au PHP c'est à dire .append('clé', valeur)
        // il suffira de récuperer en PHP $_POST['clé']
        data.append("choixTable", document.querySelector("input").value);
        
        var paramAjax = {
            method : "POST",
            body : data
        };

        // On envoie la requète au serveur puis quand vient la reponse
        fetch(urlPHP, paramAjax).then(function(response){
            // On la convertis depuis son format json
            // Astuce : si vous avez une erreur liés au contenu du json remplacé la ligne d'en desssous par : return response.text(); (c'est le contenu dans la réponse en brut, sans conversion) 
            return response.json();
            // Puis on traite la réponse
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

