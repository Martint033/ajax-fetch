<?php
// Si la valeur envoyé depuis AJAX existe
if( isset( $_POST['choixTable'] )){
    // Si elle n'est pas vide (inutile car en fait 'isset()' le test déja)
    if( !empty($_POST['choixTable'])){
        
        // Je récupère la valeur envoyé
        $choixTableUser = (int) $_POST['choixTable'];
        
        // Je traite la valeur (ici je fait des multiplications pour retourner un tableau contenant toutes les valeurs de la table demandé)
        for( $i = 1 ; $i < 11; $i++){
            $tab[] = $i ."*". $choixTableUser ." = ".( $i * $choixTableUser );
        }
        
        // Puis je le renvois au JS sous le format json (très utile pour passer des données d'un langage à l'autre)
        // !!!!! attention, seul le premier echo ou var_dump ou autre chose du même type sera renvoyer (au même titre qu'un return dans une fonction)
        echo json_encode( $tab );
        
    }
}


?> 
