<?php
if( isset( $_POST['saisie1'] ) && isset( $_POST['saisie2'] )){
    if( !empty($_POST['saisie1'])  && !empty( $_POST['saisie2'] )){
        $choix1User = (int) $_POST['saisie1'];
        $choix2User = (int) $_POST['saisie2'];
        
        $tab[] = $choix1User." + ".$choix2User." = ".($choix1User + $choix2User);
    
        echo json_encode($tab);
        
    }
}


?> 