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


