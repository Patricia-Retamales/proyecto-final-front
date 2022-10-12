import Carousel from 'react-bootstrap/Carousel';

function ComponentCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={450}
          src="https://th.bing.com/th/id/R.bb9941b673f6ec673a2a510d37e444be?rik=1nfnFPhFFcD4Qw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-HM1jG03ANxQ%2fUwIblewYMdI%2fAAAAAAAAAeQ%2fLi7cTEfxL24%2fs1600%2fDSC05466.JPG&ehk=vM0utYcEH%2b823VJQzjqDOwsbVF8qW0kQeLKemSoW47s%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>De todo un poco !!</h3>
          <p>Acompañando a los pequeños emprendedores.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={450}
          src="https://th.bing.com/th/id/R.a69928fe215d5e97fcfa14391ee59af5?rik=QbsuvlBGO%2fOSrw&pid=ImgRaw&r=0"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>De todo un poco !!</h3>
          <p>Acompañando a los pequeños emprendedores.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={450}
          width={50}
          src="https://i.pinimg.com/originals/e6/00/d3/e600d3d1e94c0270d1745de8dc05379c.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>De todo un poco !!</h3>
          <p>
            Acompañando a los pequeños emprendedores.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ComponentCarousel;