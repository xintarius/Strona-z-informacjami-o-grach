    function Odliczanie(){

    var dt = new Date();
    var dnitygodnia = ['Poniedziałek','Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'];
    var nrdnia = dt.getDate();
    var dzien = dt.getDay();
    var miesiace = ['Stycznia','Lutego','Marca','Kwietnia','Maja','Czerwca','Lipca','Sierpnia','Września','Października','Listopada','Grudnia'];
    var miesiac  = dt.getMonth();
        

    var rok = dt.getFullYear();
    
    
    var godzina = dt.getHours();
    var minuta = dt.getMinutes();
    var sekunda = dt.getSeconds();
    if (godzina<10) godzina = "0"+godzina;
		
    if (minuta<10) minuta = "0"+minuta;
    
    if (sekunda<10) sekunda = "0"+sekunda;
    
    
    document.getElementById("czas").innerHTML = dnitygodnia[dzien-1]+" "+ nrdnia+ " " + miesiace[miesiac]+" " + rok+ "|" + godzina + ':' + minuta + ':' + sekunda;
    setTimeout("Odliczanie();",1000); 
 
    }
    