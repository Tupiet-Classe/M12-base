function hidesearchinput(){
    //document.getElementById("incorrect").style.visibility = "hidden";//
    document.getElementById("input1").style.display = "inline-block";
    var hiddenbutton = document.getElementById("input1").value;

    function hiddeinput(){ 
        document.getElementById("input1").style.display = "none";
    }

    function ocultarinput() {
        if (hiddenbutton === null) {
        identificadorIntervaloDeTiempo = setInterval(hiddeinput, 3000);
        } else {
                document.getElementById("input1").style.display = "inline-block";
        }
    }

    ocultarinput();
    
}

