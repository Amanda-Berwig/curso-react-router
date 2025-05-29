import LinkNav from "./LinkNav";

export default function Nav() {
  return (
    <nav>
      <ul className="flex flex-row items-center justify-center gap-2">
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
