import Link from "next/link";

const NavLi = (props) => {
  return (
    <li className="hero-category category sets-path">
      <Link href={props.url}>
        <a>{props.name}</a>
      </Link>
    </li>
  );
};
export default NavLi;
