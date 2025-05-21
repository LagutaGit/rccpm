$(document).ready(function(){
    $('.single-slider').slick({
      dots: false, // Отключаем точки (для одного изображения не нужны)
      arrows: true, // Отключаем стрелки (опционально)
      infinite: true, // Зацикливание слайдера
      slidesToShow: 1, // Показываем одно изображение
      slidesToScroll: 1, // Прокручиваем по одному
      adaptiveHeight: true, // Автоматическая высота под содержимое
      responsive: [ // Адаптивные настройки
        {
          breakpoint: 768, // Для экранов меньше 768px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480, // Для экранов меньше 480px
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });