import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsdeGrupo() {
  return (
    <div >
      <CardGroup>
        <Card style={{ margin:"5px", height: "20%", border: "#c999af 5px solid", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black" }}>
          <Card.Img variant="top" src="https://previews.123rf.com/images/jemastock/jemastock1711/jemastock171109630/89878123-ilustraci%C3%B3n-de-vector-de-dibujos-animados-lindo-pantalla-de-monitor-de-computadora.jpg"
            height={"120rem"}
            objectFit={"cover"}
          />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Deja los datos de tu empresa
              o negocio en el formulario de contacto
            </Card.Text>
          </Card.Body>

        </Card>
        <Card style={{ margin: "5px", height: "20%", border: "#c999af 5px solid", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black" }}>
          <Card.Img variant="top" src="https://www.cloudtalk.io/wp-content/uploads/2021/12/illustration-call-template-1024x538.png"
            height={"120rem"}
            objectFit={"cover"}
          />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Recibe la llamada de un asesor
              de marketing digital para confirmar, mejorar y configurar tu anuncio
            </Card.Text>
          </Card.Body>

        </Card>
        <Card style={{ margin:"5px", height: "20%", border: "#c999af 5px solid", boxShadow: "0 2px 4px 0 black, 0 3px 10px 0 black" }}>
          <Card.Img variant="top" src="https://media.istockphoto.com/vectors/hourglass-icon-in-comic-style-sandglass-cartoon-vector-illustration-vector-id1224426485?b=1&k=6&m=1224426485&s=170667a&w=0&h=P0y2Yxgp-El1alNT4EjuaK8EmcOII1GBcOj7Q_vQcW8="
            height={"120rem"}
            objectFit={"cover"}

          />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              En unos pocas horas,tu negocio estará vendiendo y
              comprando en nuestra pagina web
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default CardsdeGrupo;