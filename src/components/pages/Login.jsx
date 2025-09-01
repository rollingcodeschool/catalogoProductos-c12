import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login } from "../../helpers/queries";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const loginUser = async (user) => {
    try {
      const respuesta = await login(user);
      if (respuesta.status === 200) {
        alert("login exitoso");
        setUsuarioLogueado(true);
        sessionStorage.setItem("userKey", true); 
        navegacion("/administrador");
      } else {
        alert("usuario o contraseña incorrecta");
      }
    } catch (error) {
      console.error(error);
      alert("usuario o contraseña incorrecta");
    }
  };

  return (
    <section className="container">
      <h1 className="display-4 my-3">Login</h1>
      <Row xs={1} md={2}>
        <Col>
          <Form onSubmit={handleSubmit(loginUser)}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: juanperez@mail.com"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener un formato valido Ej: juanperez@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register("password", {
                  required: "La contraseña es un dato obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
        <Col>
          <img
            src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg"
            alt="Imagen de cafe"
            className="img-login rounded-3"
          />
        </Col>
      </Row>
    </section>
  );
};

export default Login;
