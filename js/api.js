gifAPI('cry',2)
gifAPI('shoot',5)
gifAPI('bored',5)
gifAPI('kick',6)


function gifAPI(nombre,cant) {
    let containerIMG = document.getElementById('container');

    //obtención de gifs
    fetch("https://nekos.best/api/v2/"+nombre+"?amount="+cant)
    .then((response)=>response.json())
    .then((datos)=>{
            datos.results.forEach((element) => {
                const contenedorCreado = document.createElement('div');
                contenedorCreado.innerHTML = `
                    <h4 class="animeName">Anime: ${element.anime_name}</h4>
                    <img src="${element.url}">
                `;
                containerIMG.append(contenedorCreado);
        
            });
        
    });
}


// idea a futuro: crear un generador de imagenes o gifs en base a la selección del usuario
// let containerIMG = document.getElementById('container');
// fetch(`https://api.waifu.pics/sfw/smile`).then((response)=>response.json()).then((datos)=>{
// console.log(datos.url);
// const contenedorCreado = document.createElement('div')
// contenedorCreado.innerHTML=`
//     <img src ="${datos.url}">
// `
// containerIMG.append(contenedorCreado)
// })



