import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ComponentNavbar from '../componet/ComponentNavbar';
import Flux from '../store/Flux';



const CardTajetas = () => {




  return (
    <div className="row">



      <Card style={{ width: '18rem', margin: '22px', }}>
        <Card.Img variant="top" src="https://mmedia.eluniversal.com/18780/tortas-75946.jpg" />
        <Card.Body>
          <Card.Title>Tortas</Card.Title>
          <Card.Text>
            <p>Detalles: Se realizan tortas personalizadas</p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://animalgourmet.com/wp-content/uploads/2017/10/semillas.jpg"
          style={{}} r
        />
        <Card.Body>
          <Card.Title>El Jardín Místico</Card.Title>
          <Card.Text>
            <p>Detalles: Vendemos variedades de semillas</p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://www.ambientum.com/wp-content/uploads/2019/02/ropa.jpg" />
        <Card.Body>
          <Card.Title>La Tiendita</Card.Title>
          <Card.Text>
            <p>Detalles: Te ofrecemos gran variedad de prendas de vestir </p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/09/16468217185294.jpg" />
        <Card.Body>
          <Card.Title>Bella Pandora </Card.Title>
          <Card.Text>
            <p>Detalles: Vendemos delicadas piezas de joyeria</p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_820590-MLC46251173348_062021-O.jpg" />
        <Card.Body>
          <Card.Title>El Quijote de La Mancha</Card.Title>
          <Card.Text>
            <p>Detalles: tenemos las mejores ofretas para la limpieza de tu hogar</p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Link to="/elquijotedelamancha">
          <Button variant="primary">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://florence.cl/wp-content/uploads/2022/01/Utiles-escolares.jpg" />
        <Card.Body>
          <Card.Title>Estudiante 24/7</Card.Title>
          <Card.Text>
            <p>Detalles: vendemos varides de utiles escolares </p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Link to="/ElEstudiante">
          <Button variant="primary">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="https://d375ed4q973kxa.cloudfront.net/cdn/13/images/curso-online-de-chocolateria-fina-artesanal_l_primaria_1_1539540506.jpg" />
        <Card.Body>
          <Card.Title>Sabor Divino</Card.Title>
          <Card.Text>
            <p>Detalles: te ofrecemos el mejor sabor y gran calida de nuestros productos</p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', margin: '22px' }}>
        <Card.Img variant="top" src="http://pm1.narvii.com/6983/544ae20939df1ea1a63ddbae00cda5972859fba4r1-1024-768v2_uhq.jpg" />
        <Card.Body>
          <Card.Title>Disfraces Fantasía</Card.Title>
          <Card.Text>
            <p>Detalle: tenemos toda clase de Disfraces para cuando lo necesites </p>
            <p>Contactos: +569 12345678 </p>

          </Card.Text>
          <Button variant="primary">Ver mas</Button>
        </Card.Body>
      </Card>

    </div>
  );


  // <div className="row">



  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://www.irenemilito.it/wp-content/uploads/2018/06/Funfetti-original-redo-whole-1140x1425.jpg" />
  //     <Card.Body>
  //       <Card.Title>Tortas</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: Se realizan tortas personalizadas</p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://animalgourmet.com/wp-content/uploads/2017/10/semillas.jpg" />
  //     <Card.Body>
  //       <Card.Title>El Jardín Místico</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: Vendemos variedades de semillas</p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://www.ambientum.com/wp-content/uploads/2019/02/ropa.jpg" />
  //     <Card.Body>
  //       <Card.Title>La Tiendita</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: Te ofrecemos gran variedad de prendas de vestir </p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/03/09/16468217185294.jpg" />
  //     <Card.Body>
  //       <Card.Title>Bella Pandora </Card.Title>
  //       <Card.Text>
  //         <p>Detalles: Vendemos delicadas piezas de joyeria</p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://http2.mlstatic.com/D_NQ_NP_820590-MLC46251173348_062021-O.jpg" />
  //     <Card.Body>
  //       <Card.Title>El Quijote de La Mancha</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: tenemos las mejores ofretas para la limpieza de tu hogar</p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://florence.cl/wp-content/uploads/2022/01/Utiles-escolares.jpg" />
  //     <Card.Body>
  //       <Card.Title>Estudiante 24/7</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: vendemos varides de utiles escolares </p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="https://d375ed4q973kxa.cloudfront.net/cdn/13/images/curso-online-de-chocolateria-fina-artesanal_l_primaria_1_1539540506.jpg" />
  //     <Card.Body>
  //       <Card.Title>Sabor Divino</Card.Title>
  //       <Card.Text>
  //         <p>Detalles: te ofrecemos el mejor sabor y gran calida de nuestros productos</p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  //   <Card style={{ width: '18rem' }}>
  //     <Card.Img variant="top" src="http://pm1.narvii.com/6983/544ae20939df1ea1a63ddbae00cda5972859fba4r1-1024-768v2_uhq.jpg" />
  //     <Card.Body>
  //       <Card.Title>Disfraces Fantasía</Card.Title>
  //       <Card.Text>
  //         <p>Detalle: tenemos toda clase de Disfraces para cuando lo necesites </p>
  //         <p>Contactos: +569 12345678 </p>

  //       </Card.Text>
  //       <Button variant="primary">Ver mas</Button>
  //     </Card.Body>
  //   </Card>

  // </div>


}

export default CardTajetas;



