
let sSociete = document.getElementById("Societe");
let sSociete_m = document.getElementById("nomSociete_manquant");
let sPersonne = document.getElementById("Personne");
let sAdresse = document.getElementById("Adresse");
let sCodePostal = document.getElementById("code_postale");
let sVille = document.getElementById("Ville");
let sEmail = document.getElementById("Email");
let sTelephone = document.getElementById("Telephone"); 
let formValid = document.getElementById("formValid");
formValid.addEventListener ("click", verifForm);
let regexVerif = ; 

function verifForm(e) {
    if (sSociete.validity.valueMissing) {
        e.preventDefault();
        sSociete_m.textContent = "Nom de Société Manquant"
        sSociete_m.style.color = "red";
        console.log("Nom de Société Manquant");
        alert("Nom de Société Manquant");
}
    if (sSociete.validity.valueMissing) {
        e.preventDefault();
        sSociete_m.textContent = "Nom de Personne Manquant"
        sSociete_m.style.color = "red";
        console.log("Nom de Personne Manquant");
        alert("Nom de Personne Manquant");
}
} 