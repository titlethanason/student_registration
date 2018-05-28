    var countAllergy = 0;
    var countDisease = 0;
    var countDisability = 0;
    function addFunctionAllergy(){
        countAllergy = countAllergy+1;
        var temp = document.getElementById("divAllergy").innerHTML;
        if(countAllergy < 5){
            document.getElementById("divAllergy").innerHTML = document.getElementById("divAllergy").innerHTML + " <input class='form-control'= placeholder='พารา' name = 'allergy" + countAllergy + "' required>"
        }
    }

    function addFunctionDisease(){
        countDisease = countDisease+1;
        var temp = document.getElementById("divDisease").innerHTML;
        if(countDisease < 5){
            document.getElementById("divDisease").innerHTML = document.getElementById("divDisease").innerHTML + " <input class='form-control'= placeholder='หอบหืด' name = 'disease" + countDisease + "' required>"
        }
    }
   
    function addFunctionDisability(){
        countDisability = countDisability+1;
        var temp = document.getElementById("divDisability").innerHTML;
        if(countDisability < 5){
            document.getElementById("divDisability").innerHTML = document.getElementById("divDisability").innerHTML + " <input class='form-control'= placeholder='สายตา' name = 'disability" + countDisease + "' required>"
        }
    }