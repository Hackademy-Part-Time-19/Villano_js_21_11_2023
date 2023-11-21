let palindromo = prompt("inserisci frase da verificare:")
function pal(str){
    let norm = str.replace(/\W/g, "").toLowerCase();
    let rev = norm.split("").reverse().join("")
    return rev
}
let palindromo_rev= pal(palindromo)


if (palindromo_rev==palindromo){
    console.log("la frase "+palindromo+" è palindroma")
}
else{
    console.log("la frase "+palindromo+" non è palindroma")
}