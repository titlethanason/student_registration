    var butt = 0;
    function addFunction(){
        butt = butt+1;
        var temp = document.getElementById("medi").innerHTML;
        if(butt < 5){
            document.getElementById("medi").innerHTML = document.getElementById("medi").innerHTML + " <input class='form-control'= placeholder='พารา' name = 'allergy" + butt + "' required>"
        }
    }