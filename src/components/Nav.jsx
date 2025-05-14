import LinkNav from "./LinkNav";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <LinkNav to="/"> Sobremesas</LinkNav>
        </li>
        <li>
          <LinkNav to="/bebidas"> Bebidas</LinkNav>
        </li>
      </ul>
    </nav>
  );
}
