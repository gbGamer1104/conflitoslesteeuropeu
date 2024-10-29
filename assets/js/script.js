let mapOptions = {
    center:[51.54, 29.09],
    zoom:4
}

var has_been_clicked = 0;

let map = new L.map('map', mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.marker([53.01, 27.77], {
    riseOnHover: true,
    title: 'Teste'
});

let marker2 = new L.marker([55.01, 26.77], {
    riseOnHover:true,
    title: 'Teste2'
})

marker.bindPopup('<h1>Teste</h1>').openPopup();

marker.bindPopup('<h1>Teste2</h1>').openPopup();

marker.addTo(map);

marker2.addTo(map);

marker.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>Teste</h1>"
    }
    
})

marker2.on('click', function(e) {
    console.log(has_been_clicked)
    if (has_been_clicked == 0){
        document.getElementById('cont-mapa').innerHTML = ""
        document.getElementById('cont-mapa').innerHTML += "<h1>Teste2</h1>"
        
    }
    
})