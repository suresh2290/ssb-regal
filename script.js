window.addEventListener('load', function () {
    new Glider(document.querySelector('#kitchen .glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: '#kitchen .dots',
      arrows: {
        prev: '#kitchen .glider-prev',
        next: '#kitchen .glider-next'
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
  });
  