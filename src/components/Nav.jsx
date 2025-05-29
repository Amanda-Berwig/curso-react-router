import LinkNav from "./LinkNav";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <LinkNav to="/"> Inicio</LinkNav>
        </li>
        <li>
          <LinkNav to="/Lanches"> Lanches </LinkNav>
        </li>
      </ul>
    </nav>
  );
}
