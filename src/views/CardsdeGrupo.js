import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsdeGrupo() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://previews.123rf.com/images/jemastock/jemastock1711/jemastock171109630/89878123-ilustraci%C3%B3n-de-vector-de-dibujos-animados-lindo-pantalla-de-monitor-de-computadora.jpg" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Deja los datos de tu empresa
          o negocio en el formulario de contacto
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.cloudtalk.io/wp-content/uploads/2021/12/illustration-call-template-1024x538.png" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          Recibe la llamada de un asesor 
          de marketing digital para confirmar, mejorar y configurar tu anuncio
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://media.istockphoto.com/vectors/hourglass-icon-in-comic-style-sandglass-cartoon-vector-illustration-vector-id1224426485?b=1&k=6&m=1224426485&s=170667a&w=0&h=P0y2Yxgp-El1alNT4EjuaK8EmcOII1GBcOj7Q_vQcW8=" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          En unos pocas horas,tu negocio estará vendiendo y
          comprando en nuestra pagina web
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CardsdeGrupo;