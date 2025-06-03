import LinkNav from "./LinkNav";

import logo from "../assets/logo-preview.png";

export default function Nav() {
  return (
    <nav className="shadow-md flex justify-between gap-10 px-4">
      <img src={logo} alt="" className="w-35 h-35" />
      <ul className="flex flex-row items-center gap-10">
        <li>
          <LinkNav to="/">Início</LinkNav>
        </li>
        <li>
          <LinkNav to="/Conheça">Conheça</LinkNav>
        </li>
        <li>
          <LinkNav to="/Cardapio"> Cardápio </LinkNav>
        </li>
        <li>
          <LinkNav to="/Contato">Contato</LinkNav>
        </li>
      </ul>
    </nav>
  );
}
