let h2 = document.querySelector('h2');

function success(pos){
    console.log(pos.coords.latitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

}

function error(err){
console.log(err);

}

//essa função retorna as cordenadas e pode receber um terceiro parametro para posições mais precisas do usuario
var watchID = navigator.geolocation.watchPosition(success, error); 

//essa funcao para nao monitorar posição atual do usuario
//navigator.geolocation.clearWatch(watchID);
