// Input dati utente

var firstName = prompt("Inserisci il tuo nome:");
console.log("firstName : ", firstName);

var lastName = prompt("Inserisci il tuo cognome:");
console.log("lastName : ", lastName);

var color = prompt("Inserisci il tuo colore preferito:");
console.log("color : ", color);

// Password
var newPassword = firstName + lastName + color + "21";
console.log("newPassword : ", newPassword)

// Recupero elemento HTML

var passwordPlaceholder = document.getElementById("password")
console.log(typeof passwordPlaceholder)

// Inserisco nuova password

passwordPlaceholder.innerHTML = newPassword