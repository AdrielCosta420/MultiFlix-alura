//foi criado uma lista (array) para conter todas as variáveis.

var listaFilmes = [
    "https://m.media-amazon.com/images/I/91x4Hy3Y8WL._AC_SY550_.jpg",
    
    "https://br.web.img3.acsta.net/pictures/14/10/28/21/28/104479.jpg",

    "http://3.bp.blogspot.com/-tCBmjw7ti_M/VGDla6PAW_I/AAAAAAAAM8c/7vaEVkmio4g/s1600/Interestelar%2B01.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src =" + listaFilmes[i] + ">");
}
