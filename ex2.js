// Je recupère l'evenement de submit du formulaire
document.querySelector("form").addEventListener("submit", function(e){
    // J'annule le traitement automatique du submit
    e.preventDefault();

    // Je teste si la valeur et un chiffre et qu'elle n'est pas vide
    if (isNaN(document.querySelector("input").value) || document.querySelector("input").value.length == 0){
        alert ("Entrer un nombre");
    }
    else{
        // le chemin vers le fichier PHP
        const urlPHP = "ex2.php";
        // La variable qui sera envoyés dans la requète doit être de type FormData()
        var data = new FormData();
        // Les données qu'on va envoyer on au PHP c'est à dire .append('clé', valeur)
        // Il suffira de récuperer en PHP $_POST['clé']
        // Si vous voulez envoyer plusieurs variables au PHP il suffira d'ajouter d'autres lignes : data.append('autreClé', autreValeur);
        data.append("choixTable", document.querySelector("input").value);
        
        // Les paramètres de la requète
        var paramAjax = {
            // La méthode d'envois des données au PHP (pourrais être "GET" par exemple) 
            method : "POST",
            // Pour ajouter les variables et leurs valeur dans la requète 
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
