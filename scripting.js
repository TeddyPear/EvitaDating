function myFunction() {
  function persoon(naam, kinderen, leeftijd, zelforg, anderorg){
    this.naam = naam;
    this.kinderen = kinderen;
    this.leeftijd = leeftijd;
    this.zelforg = zelforg;
    this.anderorg = anderorg;
}
var kandidaten = [];

var zelf = new persoon(
  document.getElementById("firstName1").value,
  document.getElementById("Kinderen1").value,
  document.getElementById("leeftijd").value,
  document.getElementById("zelfOrg1").value,
  document.getElementById("anderOrg1").value
  );
  
kandidaten.push(new persoon("henk","Ja",20,"Ja","Maakt niet uit"));
kandidaten.push(new persoon("Jan","Nee", 19,"Ja","Liever wel"));
kandidaten.push(new persoon("Eva","Ja",22,"Nee","Liever wel"));
kandidaten.push(new persoon("Julie","Nee",23,"Nee","Maakt niet uit"));
  
var scores = [];
  
for(i = 0; i < kandidaten.length;i++){
  var punten = 0;
  if(zelf.kinderen == kandidaten[i].kinderen){
    punten += 10;
  }
  punten += Math.max(5 - (Math.abs(zelf.leeftijd - kandidaten[i].leeftijd)/2),0);
  if((zelf.anderorg == "Maakt niet uit" )||(kandidaten[i].zelforg == "Ja")){
     punten += 4;
  }
  if((kandidaten[i].anderorg == "Maakt niet uit" )||(zelf.zelforg == "Ja")){
     punten += 4;
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
