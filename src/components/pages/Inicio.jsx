import { Container, Row, Form } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect, useState } from "react";

const Inicio = ({ productos }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleInputChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const productosFiltrados = productos.filter((producto) => 
    producto.nombreProducto.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Buscar un producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del producto"
              onChange={handleInputChange}
              value={terminoBusqueda}
            />
          </Form.Group>
        </Form>
        <Row>
          {productosFiltrados.length > 0
            ? productosFiltrados.map((producto) => (
                <CardProducto
                  key={producto.id}
                  producto={producto}
                ></CardProducto>
              ))
            : <p>No hay productos disponibles</p>}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
