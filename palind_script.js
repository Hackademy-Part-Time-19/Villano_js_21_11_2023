let palindromo = prompt("inserisci frase da verificare:")
function pal(str){
    let palindroma=false
    let norm = str.replace(/\W/g, "").toLowerCase();
    let rev = norm.split("").reverse().join("")
    if (norm=rev){
        palindroma=true
    }
    return palindroma
}
let palindromo_rev= pal(palindromo)


if (palindromo_rev){
    console.log("la frase "+palindromo+" è palindroma")
}
else{
    console.log("la frase "+palindromo+" non è palindroma")
}