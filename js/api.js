// gifAPI('cry',2)
// gifAPI('shoot',5)
// gifAPI('bored',5)
// gifAPI('kick',6)


// function gifAPI(nombre,cant) {
//     let containerIMG = document.getElementById('container');

//     //obtención de gifs
//     fetch("https://nekos.best/api/v2/"+nombre+"?amount="+cant)
//     .then((response)=>response.json())
//     .then((datos)=>{
//             datos.results.forEach((element) => {
//                 const contenedorCreado = document.createElement('div');
//                 contenedorCreado.innerHTML = `
//                     <h4 class="animeName">Anime: ${element.anime_name}</h4>
//                     <img src="${element.url}">
//                 `;
//                 containerIMG.append(contenedorCreado);
        
//             });
        
//     });
// }


// idea a futuro: crear un generador de imagenes o gifs en base a la selección del usuario
let tipo = "sfw"
let categoriaDefault = "dance"
const categorias = [
    "waifu",
    "neko",
    "shinobu",
    "megumin",
    "bully",
    "cuddle",
    "cry",
    "kiss",
    "lick",
    "hug",
    "awoo",
    "pat",
    "smug",
    "bonk",
    "yeet",
    "blush",
    "smile",
    "wave",
    "highfive",
    "handhold",
    "nom",
    "bite",
    "glomp",
    "slap",
    "kill",
    "kick",
    "happy",
    "wink",
    "poke",
    "dance",
    "cringe"
]

const selector = document.getElementById('selector');
const containerIMG = document.getElementById('img');
const btnGenerador = document.getElementById('generador');
const enunciado = document.getElementById('');


categorias.forEach((element) =>{
    
})


selector.innerHTML = `

    <select>
        <option value=""></option> 
    </select>

`;





generar()

//sombra de carga
const sombraDeCarga = `
    <div class ="containerSombra"></div>
`;

const boton = document.getElementById("generador");
boton.addEventListener('click', ()=>{
    containerIMG.innerHTML='';
    containerIMG.innerHTML=sombraDeCarga;
    generar();
})


function generar(){
    fetch(`https://api.waifu.pics/sfw/kill`).then((response)=>response.json()).then((datos)=>{
    console.log(datos.url);
    containerIMG.innerHTML=`
        <img src ="${datos.url}">
    `;
    
    }).catch(error=> {
        containerIMG.innerHTML = `Hubo un error Error!`
    })

}



