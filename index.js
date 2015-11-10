function getPriceSubmarino(url){
    
    url = 'proxy.php?url=' + url;

    $.ajax({
        method: "GET",
        url: url,
        success: function(data) {

            var preco = ($(data).find('.sales-price + span').text());
            preco = preco.split(' ');
            preco = preco[1];
            
            $('.data-submarino').text(preco);
        }
    });  

}

function getPriceAmericanas(url){ 
    
    url = 'proxy.php?url=' + url;

    $.ajax({
        method: "GET",
        url: url,
        success: function(data) {
        
            var preco = ($(data).find('.sales-price + span').text());
            preco = preco.split(' ');
            preco = preco[1];
            
            $('.data-americanas').text(preco);
        }
    });  
}

function getPriceSaraiva(url){ 
    
    url = 'proxy.php?url=' + url;

    $.ajax({
        method: "GET",
        url: url,
        success: function(data) {
            
            var preco = ($(data).find('.finalPrice b').text());
            
            $('.data-saraiva').text(preco);
        }
    });  
}

$(document).ready(function(){
    
    var url_submarino = "http://www.submarino.com.br/produto/122099272/iphone-5s-16gb-prata-desbloqueado-ios-8-4g-wi-fi-camera-de-8mp-apple";
    getPriceSubmarino(url_submarino);
    
    var url_americanas = "http://www.americanas.com.br/produto/122099272/iphone-5s-16gb-prata-desbloqueado-ios-8-4g-wi-fi-camera-de-8mp-apple";
    getPriceAmericanas(url_americanas);
    
    var url_saraiva = "http://www.saraiva.com.br/iphone-5s-32gb-dourado-apple-8632879.html";
    getPriceSaraiva(url_saraiva);
    
    return false
});