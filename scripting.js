function myFunction() {
  function persoon(naam, kinderen, leeftijd){
    this.naam = naam;
    this.kinderen = kinderen;
    this.leeftijd = leeftijd;
}
var kandidaten = [];

var zelf = new persoon("Emiel", "Ja",15);
  
kandidaten.push(new persoon("henk","Ja",20));
kandidaten.push(new persoon("Jan","Nee", 19));
kandidaten.push(new persoon("Eva","Ja",22));
kandidaten.push(new persoon("Julie","Nee",23));
  
var scores = [];
  
for(i = 0; i < kandidaten.length;i++){
  var punten = 0;
  if(zelf.kinderen == kandidaten[i].kinderen){
    punten += 10;
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
