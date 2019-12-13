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
        const urlPHP = "calculeTable.php";
        // La variable qui sera envoyés dans la requète doit être de type FormData()
        var data = new FormData();
        // Les données qu'on va envoyer au PHP : data.append('clé', valeur);
        // Il suffira de récuperer en PHP : $_POST['clé']
        // Si vous voulez envoyer plusieurs variables au PHP il suffira d'ajouter d'autres lignes : data.append('autreClé', autreValeur);
        data.append("choixTable", document.querySelector("input").value);
        
        // Les paramètres de la requète
        var paramAjax = {
            // La méthode d'envois des données au PHP (pourrais être "GET" par exemple) 
            method : "POST",
            // Pour ajouter les données à transmette dans la requète 
            body : data
        };

        // On envoie la requète au serveur, puis (== then) quand vient la reponse
        fetch(urlPHP, paramAjax).then(function(response){
            // On retourne la réponse convertis depuis son format json vers une variable javascript
            // Astuce : si vous avez une erreur avec la réponse,
            //          remplacé la ligne d'en desssous par : 
            //                  return response.text(); 
            //          (c'est le contenu dans la réponse en brut, sans conversion, qui contiendra en cas d'erreur le message d'erreur renvoyé par php) 
            return response.json();
            
            // Puis on traite la réponse
        }).then (function (response){
            // On écrit le résultat dans des balises html
            var html = "";
            for (index in response){
                html += "<p>" + response[index] + "<p>";
            }
            // Et on affiche le résultat à l'utilisateur
            document.querySelector("#result").innerHTML = html;
        })
    }
});
