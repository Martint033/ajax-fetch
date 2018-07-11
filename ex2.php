<?php
if( isset( $_POST['choixTable'] )){
    if( !empty($_POST['choixTable'])){
        $choixTableUser = (int) $_POST['choixTable'];
        
        for( $i = 1 ; $i < 11; $i++){
            $tab[] = $i ."*". $choixTableUser ." = ".( $i * $choixTableUser );
        }
    
        echo json_encode( $tab );
        
    }
}


?> 