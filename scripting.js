function myFunction() {
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
var kandidaten = [];

var zelf = new persoon(
  document.getElementById("firstName1").value,
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
  
kandidaten.push(new persoon("henk","Ja",20,"Ja","Maakt niet uit","Man","Vrouw","Cruise","Nee","Maakt niet uit"));
kandidaten.push(new persoon("Jan","Nee", 19,"Ja","Liever wel","Man","Man","Strandvakantie","Nee","Maakt niet uit"));
kandidaten.push(new persoon("Eva","Ja",22,"Nee","Liever wel","Vrouw","Maakt niet uit","Trektochten","Ja","Ja"));
kandidaten.push(new persoon("Julie","Nee",23,"Nee","Maakt niet uit","Vrouw","Man","Cruise","Nee","Ja"));
  
var scores = [];
  
for(i = 0; i < kandidaten.length;i++){
  var punten = 0;
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
    if((zelf.voorkeur == "Maakt niet uit"|| zelf.voorkeur == kandidaten[i].geslacht)&&( zelf.geslacht == kandidaten[i].voorkeur ||kandidaten[i].voorkeur == "Maakt niet uit")){
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
  document.getElementById("output").innerHTML = kandidaten[plek].naam;
}
