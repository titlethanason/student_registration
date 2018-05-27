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


 function copy()
  { if (document.getElementById("cbox").checked)
    {
      var numh = document.getElementById("numhourse").value;
      var soi = document.getElementById("soi").value;
      var road = document.getElementById("road").value;
      var province = document.getElementById("province").value;
      var aumper = document.getElementById("aumper").value;
      var jungwad = document.getElementById("jungwad").value;
      var postcode = document.getElementById("postcode").value;
      document.getElementById("nh").value = numh;
      document.getElementById("s").value = soi;
      document.getElementById("r").value = road;
      document.getElementById("p").value = province;
      document.getElementById("a").value = aumper;
      document.getElementById("j").value = jungwad;
      document.getElementById("pc").value = postcode;
    }
    else
    {
      document.getElementById("nh").value = null;
      document.getElementById("s").value = null;
      document.getElementById("r").value = null;
      document.getElementById("p").value = null;
      document.getElementById("a").value = null;
      document.getElementById("j").value = null;
      document.getElementById("pc").value = null;
    }
  }

  function copyd()
   { if (document.getElementById("cboxd").checked)
     {
       var numh = document.getElementById("numhourse").value;
       var soi = document.getElementById("soi").value;
       var road = document.getElementById("road").value;
       var province = document.getElementById("province").value;
       var aumper = document.getElementById("aumper").value;
       var jungwad = document.getElementById("jungwad").value;
       var postcode = document.getElementById("postcode").value;
       document.getElementById("nhd").value = numh;
       document.getElementById("sd").value = soi;
       document.getElementById("rd").value = road;
       document.getElementById("pd").value = province;
       document.getElementById("ad").value = aumper;
       document.getElementById("jd").value = jungwad;
       document.getElementById("pcd").value = postcode;
     }
     else
     {
       document.getElementById("nhd").value = null;
       document.getElementById("sd").value = null;
       document.getElementById("rd").value = null;
       document.getElementById("pd").value = null;
       document.getElementById("ad").value = null;
       document.getElementById("jd").value = null;
       document.getElementById("pcd").value = null;
     }
   }

   function copym()
   {
     if(document.getElementById("cboxm").checked)
     {
       var numh = document.getElementById("numhourse").value;
       var soi = document.getElementById("soi").value;
       var road = document.getElementById("road").value;
       var province = document.getElementById("province").value;
       var aumper = document.getElementById("aumper").value;
       var jungwad = document.getElementById("jungwad").value;
       var postcode = document.getElementById("postcode").value;
       document.getElementById("nhm").value = numh;
       document.getElementById("sm").value = soi;
       document.getElementById("rm").value = road;
       document.getElementById("pm").value = province;
       document.getElementById("am").value = aumper;
       document.getElementById("jm").value = jungwad;
       document.getElementById("pcm").value = postcode;
     }
     else
     {
       document.getElementById("nhm").value = null;
       document.getElementById("sm").value = null;
       document.getElementById("rm").value = null;
       document.getElementById("pm").value = null;
       document.getElementById("am").value = null;
       document.getElementById("jm").value = null;
       document.getElementById("pcm").value = null;
     }
   }

   function copyp()
   {
     if(document.getElementById("cboxp").checked)
     {
       var numh = document.getElementById("numhourse").value;
       var soi = document.getElementById("soi").value;
       var road = document.getElementById("road").value;
       var province = document.getElementById("province").value;
       var aumper = document.getElementById("aumper").value;
       var jungwad = document.getElementById("jungwad").value;
       var postcode = document.getElementById("postcode").value;
       document.getElementById("nhp").value = numh;
       document.getElementById("sp").value = soi;
       document.getElementById("rp").value = road;
       document.getElementById("pp").value = province;
       document.getElementById("ap").value = aumper;
       document.getElementById("jp").value = jungwad;
       document.getElementById("pcp").value = postcode;
     }
     else
     {
       document.getElementById("nhp").value = null;
       document.getElementById("sp").value = null;
       document.getElementById("rp").value = null;
       document.getElementById("pp").value = null;
       document.getElementById("ap").value = null;
       document.getElementById("jp").value = null;
       document.getElementById("pcp").value = null;
     }
   }
   /* checkbox below form-in
   <div class="form-group row" style="margin-left:auto">
     <div class="col-1-sm col-form-label text-nowrap">
       <input id="cbox" form ="realform" type="checkbox" style="margin-right:7px" onclick="copy()">
     </div>
     <div class="col-5-sm" style="padding-left:10px;padding-right:10px;padding-top:5px">ใช้ที่อยู่ตามทะเบียน</div>
   </div>
   */
