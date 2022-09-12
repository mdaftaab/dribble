import NavLi from "./NavLi";

const NavList = (props) => {
  return (
    <ul className="search-suggestions-hero search-results-suggestions">
      {props.list.map((data) => (
        <NavLi link={data.navUrl} name={data.navName} />
      ))}
    </ul>
  );
};
export default NavList;
