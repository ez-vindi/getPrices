<?php

    $url = $_GET['url'];
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
    $output = curl_exec($ch); 
    curl_close($ch);
    echo $output;
    
    /*
    function microtime_float(){ 
        list($usec, $sec) = explode(" ", microtime()); 
        return ((float)$usec + (float)$sec); 
    } 

    $time_start = microtime_float();
    
    $time_end = microtime_float();
    $time = $time_end - $time_start;*/
    
?>