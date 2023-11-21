let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"
let url_split1= url.split("?")
let url_split2=url_split1[1].split("&")
console.log(url_split2)

url_split2.forEach(function(s) {
    let url_split3= s.split("=")
    console.log(url_split3[0]+","+url_split3[1])
} )