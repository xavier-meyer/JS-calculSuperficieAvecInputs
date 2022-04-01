// déclaration variables

let longueurInput = document.getElementById("longueur");
let largeurInput = document.getElementById("largeur");
let superficie = document.getElementById("superficie-piece");
let longueur;
let largeur;
let longueurConvert;
let largeurConvert;
let avertissement = document.getElementById("avertissement");

//  FCT récuperer la valeur des inputs longueur et largeur
function recupInput(){
    longueur = longueurInput.value;
    largeur = largeurInput.value;
    
    checkNombre(longueur, largeur);
}
// && (param1 == "") || (param2 == "")
// FCT checkNombre
function checkNombre(param1, param2){
    if((isNaN(param1) || isNaN(param2)) || (param1 == "") || (param2 == "")){
        // afficher avertissment en cas de type non nombre ou champ vide
       avertissement.innerHTML = "veuillez vous assurez d'avoir entrer un nombre dans le champ!!"; 
    }else{
        // annuler affichage de l'avertissement
        avertissement.innerHTML= "";
        convertirNombre(param1, param2);
    }
}

// FCT convertirNombre 
function convertirNombre(param1,param2){
    longueurConvert = parseFloat(param1);
    largeurConvert = parseFloat(param2);
    calcSuperficie(longueurConvert, largeurConvert);
}

// FCT calcul superficie
function calcSuperficie(param1,param2){
    surfaceTotal = param1  * param2 ;
    console.log(superficie);
    showSuperficie();
}

// fct afficher superficie
function showSuperficie(){
    superficie.innerHTML = surfaceTotal;
}



// ecoute évenement longueurInput
longueurInput.addEventListener("input", function(){
    recupInput();
})

// écouter évenement largeurInput
largeurInput.addEventListener("input", function(){
    recupInput();
})