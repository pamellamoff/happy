/* desabilitar algumas funções do mapa como zoom e mexer */
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,/*desabilita a rodinha do mouse para dar zoom*/
    zoomControl: false
}

/* create map */
const map = L.map("mapid", options).setView([-19.8080503,-43.1813632], 15);
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

/* create and add marker */
L.marker([-19.8080503,-43.1813632], { icon })
  .addTo(map)
/*aqui no L todo é adicionado um Popup de indicação de lugar no mapa, um point no
mapa como no google maps, aquele ícone vermelho para indicar localização*/


/* image gallery */

function selectImage(event) {
  const button = event.currentTarget

  /*remover todas as classes .active das imgs na galeria que ficam abaixo da img principal*/
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button){
    button.classList.remove("active")/*esse botão não é a constante button criado na primeira linha*/
  }
  /*selecionar a img clicada*/
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  
  /*atualizar o container de image, ou seja, a img clicada vai virar a principal*/
  imageContainer.src = image.src
  
  /*adicionar a classe .active para este botão*/
  button.classList.add("active")

}/*aqui eu vou configurar as imagens da gallery que ficam abaixo da img principal,
ou seja, quero que cada uma delas se comporte como um botão*/
