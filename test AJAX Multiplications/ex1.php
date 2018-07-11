<?php
if( isset( $_SERVER['CONTENT_TYPE'] )){
    $contentType = $_SERVER['CONTENT_TYPE'];
    if( $contentType === "application/json"){
        $content = trim( file_get_contents("php://input"));
        $jsonDecoded = json_decode($content, true);
        if( is_array( $jsonDecoded )){
            $choixTableUser = (int) $jsonDecoded["choixTable"];
            for( $i = 1 ; $i < 11; $i++){
                $tab[] = $i ."*". $choixTableUser ." = ".( $i * $choixTableUser );
            }
    
            echo json_encode( $tab );
        }
    }
}


?> 