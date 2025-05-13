import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sobremesas</Link>
        </li>
        <li>
          <Link to="/bebidas">Bebidas</Link>
        </li>
      </ul>
    </nav>
  );
}
