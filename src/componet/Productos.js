import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ComponentNavbar from '../componet/ComponentNavbar';
import Flux from '../store/Flux';

const CardTajetas = () => {
    return(

<> 


<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.irenemilito.it/wp-content/uploads/2018/06/Funfetti-original-redo-whole-1140x1425.jpg" />
      <Card.Body>
        <Card.Title>Tortas</Card.Title>
        <Card.Text>
          <p>Detalles: Se realizan tortas personalizadas</p>
          <p>Contactos: +569 12345678 </p>
         
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

</>
    );
}
export default CardTajetas 