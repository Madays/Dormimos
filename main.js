function sleeping(weekday, vacations) {
    var weekday = document.getElementById("weekday").value;
    var vacations = document.getElementById("vacations").value;
    
    if (weekday=="sabado" || weekday=="domingo" || vacations=="vacations"){
        document.getElementById("resultado").innerHTML="1"   ;
    }else{
        document.getElementById("resultado").innerHTML="0";
    }   
}
