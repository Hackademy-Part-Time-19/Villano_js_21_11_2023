
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]
function filtro_prezzo(lista){
    lista_pr= []
    for (let i=0; i<lista.length; i++){
        if (lista[i].prezzo>250){
            lista_pr.push(lista[i])

        }
    }
    return lista_pr

}
let lista_filter_fun= filtro_prezzo(listaProdotti)
console.log(lista_filter_fun)

let lista_filter= listaProdotti.filter((listaProdotti) => listaProdotti.prezzo>250)
console.log(lista_filter)
let lista_sort_nome = listaProdotti.sort(function(n1,n2)  {let x = n1.nome.toLowerCase();
let y = n2.nome.toLowerCase();
if (x < y) {return -1;}
if (x > y) {return 1;}
return 0;
})
console.log(lista_sort_nome)
let lista_sort_prezzo = listaProdotti.sort((p1,p2) => p1.prezzo-p2.prezzo )
console.log(lista_sort_prezzo)