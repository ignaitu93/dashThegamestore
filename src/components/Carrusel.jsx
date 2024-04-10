import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/img/22-08-2023-10-08-29-Banner 1 (1).jpg';
import banner2 from '../assets/img/4kinggstonnuevo (1).jpg'; 
import banner3 from '../assets/img/alanwaque.jpg'; 

function Carrusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true // Si deseas flechas de navegación en el carrusel
  };

  return (
    <header className="preventa">
      <h2>Dashboard The Game Store</h2>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
        </div>
      </Slider>
    </header>
  );
}

export default Carrusel;