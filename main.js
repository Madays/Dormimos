function sleeping(){
    console.log("sdfdgs");
    var dia = parseInt(document.getElementById("dia").value);
    var vacations = parseInt(document.getElementById("vacations").value);
    
    if (dia>=6 || vacations==1){
        document.getElementById("resultado").innerHTML="Duerme: 1";    
    }else{
        document.getElementById("resultado").innerHTML="No Duerme: 0";
    }
}

