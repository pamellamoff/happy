/* create map */
const map = L.map("mapid").setView([-19.8080503,-43.1813632], 15);
/*aqui é definido uma constante map que recebe um mapa com a longitude, latidute e zoom passados
em setView*/

/* create and add tileLayer */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);
/*tileLayer é uma camada que está recebendo o mapa, em seguida está sendo adicionando 
ao mapa map*/

/* create icon de localization */
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
})/* aqui definimos que no lugar do point de localização
o incone da página para exercer essa mesma função vai ser a própria logo */

let marker;/*aqui é iniciada a variável vazia caso precise de alterar, basta mudar por aqui*/

/* create and add marker*/
map.on('click', function(event) {
    /*com essas constantes estamos obtendo a latitude e longitudo do lugar que o usuário clicou no mapa.*/
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    /*o document é para armazenar a lat e lng para que a localização fique guardada no mapa geral do site após
    adicionar um orfanato.*/
    document.querySelector('[name = lat]').value= lat;
    document.querySelector('[name = lng]').value= lng;

    /* remove icon */
    /*aqui ao clicar no mapa para marcar a localização, caso já exista um icon, ele irá remover o que 
    já existe, deixando apenas o último que foi marcado*/
    marker && map.removeLayer(marker)
        /*se existir o marker [marker &&] ele remove o marker [map.removeLayer(marker)]*/

    /*add icon layer*/
    /*aqui o ícone que adicionado ao mapa com o click do usuário para demarcar a localização do orfanato*/
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})/* a declaração da função pode ser feita da seguinte ('click', forma (envet) => {})
aqui o usuário ao clicar no ponto do mapa ao adicionar localização, irá adicionar uma marcar de localização,
o ponto com o rostinho amarelo*/

/*add field of photos*/
function addPhotoField() {
    /*console.log('esta funcionando')*/
    /*comando dado para teste*/

    /*get the container of photos #images*/
    const container = document.querySelector('#images')

    /*get the container for duplicate .new-upload*/
    const fieldsContainer = document.querySelectorAll('.new-upload')

    /*make the clone of the last image add*/
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    /* no add if field was void*/
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return /*para de executar o restante do código */
    }

    /* clean up the field after add images*/
    newFieldContainer.children[0].value =""

    /*add the clone in container of #images*/
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span= event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        /*clean the value of the field*/
        span.parentNode.children[0].value= ""
        return
    }

    /*delete the field*/
    span.parentNode.remove();
}/*aqui é configurado a função do botão de remover o link de uma imagem do formulário*/

/*select the button yes or no*/
function toggleSelect(event) {
    /*remove the class .active of the buttons that even selected*/
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    /*put the class .active in new button clicked*/
    const button = event.currentTarget
    button.classList.add('active')

    
    /*get the button clicked*/

    /*what is button selected?*/


    /*get the new value of the input hidden that user selected*/
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

    


}/*aqui é configurado o botão de sim e não para quando o usuário selecionar, a cor do quadro
que ele escolher ficar em destaque e não ficar com destaque apenas o quadro do sim como estava anteriormente */