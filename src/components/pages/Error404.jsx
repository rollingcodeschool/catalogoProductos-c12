import { Link } from "react-router";
import error from "../../assets/error404.png";

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" />
      <div>
        <Link className="btn btn-success" to={'/'}>Volver al inicio</Link>
      </div>
    </section>
  );
};

export default Error404;
