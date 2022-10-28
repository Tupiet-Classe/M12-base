function hidesearchinput(){
    //document.getElementById("incorrect").style.visibility = "hidden";//
    document.getElementById("input1").style.display = "inline-block";
    

    function hiddeinput(){
        var hiddenbutton = document.getElementById("input1").value;
            if (hiddenbutton == "") {
            document.getElementById("input1").style.display = "none";
            } else {
                clearTimeout(identificadorIntervaloDeTiempo)
            }
    }

    function ocultarinput() {
        identificadorIntervaloDeTiempo = setTimeout(hiddeinput, 5000);
      }

    ocultarinput();
}

