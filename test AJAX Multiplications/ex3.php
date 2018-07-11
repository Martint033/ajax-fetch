<?php
if( isset( $_GET['choixTable'] )){
    if( !empty($_GET['choixTable'])){
        $choixTableUser = (int) $_GET['choixTable'];
        
        for( $i = 1 ; $i < 11; $i++){
            $tab[] = $i ."*". $choixTableUser ." = ".( $i * $choixTableUser );
        }
    
        echo json_encode( $tab );
        
    }
}


?> 