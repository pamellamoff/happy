/* create map */
const map = L.map("mapid").setView([-19.8080503,-43.1813632], 15);
/*aqui é definido uma constante map que recebe um mapa com a longitude, latidute e zoom passados
em setView*/

/* create and add tileLayer */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
/*tileLayer é uma camada que está recebendo o mapa, em seguida está sendo adicionando 
ao mapa map*/

/* create icon de localization */
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor: [170, 2]
})/* aqui definimos que no lugar do point de localização
o incone da página para exercer essa mesma função vai ser a própria logo */

/* create popup overlay */
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWindth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>') /* aqui o set retorna um contéudo que sera colocado no Popup, esse conteúdo é uma string e é similiar ao que acontece abaixo no (bindPopup) */

/* create and add marker */
L.marker([-19.8080503,-43.1813632], { icon })
  .addTo(map)
  .bindPopup(popup)/*liga uma coisa a outra*/
/*aqui no L todo é adicionado um Popup de indicação de lugar no mapa, um point no
mapa como no google maps, aquele ícone vermelho para indicar localização*/



