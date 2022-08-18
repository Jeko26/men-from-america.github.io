$(".accordion").accordion();
$(".accordion").accordion({ heightStyle: "content" });
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [40.363508332590946,-97.68088980431506],
            zoom: 5,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([34, -118.24], {
            hintContent: 'Где живут пендосы?',
            balloonContent: 'Пендосы живут здесь!'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'image/maker.png',
            iconImageSize: [40, 40],
            iconImageOffset: [-5, -38]
        })

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});