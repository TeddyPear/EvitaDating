var myDat = firebase.database();

function createNewPerson(id,naam, kinderen, leeftijd, zelforg, anderorg,geslacht ,voorkeur,vakantie,zelfsport,andersport){
  myDat.ref('users/' + id).set({
   naam: naam,
   kinderen: kinderen,
   leeftijd: leeftijd,
   zelforg: zelforg,
   anderorg: anderorg,
   geslacht: geslacht,
   voorkeur: voorkeur,
   vakantie: vakantie,
   zelfsport: zelfsport,
   andersport: andersport
  });
}

function persoon(naam, kinderen, leeftijd, zelforg, anderorg,geslacht ,voorkeur,vakantie,zelfsport,andersport){
    this.naam = naam;
    this.kinderen = kinderen;
    this.leeftijd = leeftijd;
    this.zelforg = zelforg;
    this.anderorg = anderorg;
    this.geslacht = geslacht;
    this.voorkeur = voorkeur;
    this.vakantie = vakantie;
    this.zelfsport = zelfsport;
    this.andersport = andersport;
}

var reff = myDat.ref('users');
reff.on('value', gotData, errData);

var kandidaten = [];

function gotData(data){
	//console.log(data.val());
	var people = data.val();
	var ids = Object.keys(people);
	for(i = 0;i < ids.length ;i++){
		var thisId = ids[i];
		var naim = people[thisId];
		kandidaten.push(naim);
		//console.log(naim);
	}
}
//console.log(kandidaten);

function errData(datta){
	//alert("error");
}



function myFunction() {

  





var zelf = new persoon(
  document.getElementById("firstName1").value +" "+ document.getElementById("lastName1").value,
  document.getElementById("Kinderen1").value,
  document.getElementById("leeftijd").value,
  document.getElementById("zelfOrg1").value,
  document.getElementById("anderOrg1").value,
  document.getElementById("geslacht").value,
  document.getElementById("voorkeur").value,
  document.getElementById("vakantie").value,
  document.getElementById("zelfsport").value,
  document.getElementById("andersport").value
  );
  
//kandidaten.push(new persoon("Piet Papier","Ja",23 ,"Nee","Maakt niet uit","Man","Vrouw","Strandvakantie","Ja","Maakt niet uit"));
//kandidaten.push(new persoon("Juliet Jansen","Ja",22 ,"Ja","Maakt niet uit","Vrouw","Man","Cruise","Ja","Liever wel"));  
//kandidaten.push(new persoon("Klaas Kaas","Ja",34 ,"Ja","Liever wel","Man","Man","Nee","Trektochten" ,"Maakt niet uit"));




var scores = [];
var namen = [];
console.log(kandidaten.length);
console.log(kandidaten);
////alert(kandidaten.length);

for(i = 0; i < kandidaten.length;i++){
  var punten = 0;
  ////alert("tussencheck");
  if(zelf.kinderen == kandidaten[i].kinderen){
    punten += 12;
  }
  punten += Math.max(5 - (Math.abs(zelf.leeftijd - kandidaten[i].leeftijd)/2),0);
  
  if((zelf.anderorg == "Maakt niet uit" )||(kandidaten[i].zelforg == "Ja")){
     punten += 4;
  }
  if((kandidaten[i].anderorg == "Maakt niet uit" )||(zelf.zelforg == "Ja")){
     punten += 4;
  }
    if((zelf.voorkeur == "Maakt niet uit" || zelf.voorkeur == kandidaten[i].geslacht)&&( zelf.geslacht == kandidaten[i].voorkeur ||kandidaten[i].voorkeur == "Maakt niet uit")){
     punten += 1000; 
  }
  
  if((zelf.andersport == "Maakt niet uit" )||(kandidaten[i].zelfsport == "Ja")){
     punten += 4;
  }
  if((kandidaten[i].andersport == "Maakt niet uit" )||(zelf.zelfsport == "Ja")){
     punten += 4;
  }
  if(zelf.vakantie == kandidaten[i].vakantie){
    punten += 7;
  } 
  //alert("check!");
   namen.push(kandidaten[i].naam);
  scores.push(punten); 
}  
var max = 0;
var plek = 0;

for(i = 0; i < scores.length ;i++){
  if(scores[i] > max){
   max = scores[i];
   plek = i;
  }
  
}  

  var geslacht = "Hij";
  var org = "georganiseerd";
  var sportief = "niet";
  var vakantie = "gaat het liefst naar een strand";
  var kind = "geen";
  
  if (kandidaten[plek].geslacht == "Man"){geslacht = "Hij";}else{geslacht ="Zij";}
  if (kandidaten[plek].zelforg == "Ja"){org = "";}else{org="niet zo ";}
  if (kandidaten[plek].zelfsport == "Ja"){sportief = "";}else{sportief =" niet";}
  if (kandidaten[plek].vakantie == "Strandvakantie"){vakantie = "ligt het liefst op een strand";}else if(kandidaten[plek].vakantie == "Cruise"){vakantie ="vermaakt zich het liefst op een cruiseschip";}else{vakantie="maakt het liefst trektochten";}
  if(kandidaten[plek].kinderen == "Ja"){kind = "graag";}else{kind = "geen"}



  console.log(kandidaten[plek].kinderen);
  document.getElementById("partner").style.height = "686px";
  document.getElementById("twitterding").style.height = "686px";
  document.getElementById("resultaat").innerHTML = "Jouw partner is: "+ namen[plek];
  document.getElementById("output").innerHTML = "Je matcht voor " + (Math.round(Math.abs(max - 1000)/ 0.40)) + "% met: " + namen[plek] + "!"; 
  document.getElementById("gegevens").innerHTML =  geslacht + " is " + org +"georganiseerd en " + "sport"+ sportief +" veel. "+ geslacht + " " + vakantie + " tijdens een vakantie.  Daarnaast wil "+ geslacht.toLowerCase() + " " + kind + " kinderen."  ; 
}






function addMe(){
	

	
createNewPerson(
  document.getElementById("firstName1").value + " " + document.getElementById("lastName1").value, 
  document.getElementById("firstName1").value + " " + document.getElementById("lastName1").value,
  document.getElementById("Kinderen1").value,
  document.getElementById("leeftijd").value,
  document.getElementById("zelfOrg1").value,
  document.getElementById("anderOrg1").value,
  document.getElementById("geslacht").value,
  document.getElementById("voorkeur").value,
  document.getElementById("vakantie").value,
  document.getElementById("zelfsport").value,
  document.getElementById("andersport").value
);


}
