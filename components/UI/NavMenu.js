import NavLi from "./NavLi";
const NavMenu = (props) => {
  return (
    <ul>
      {props.navList.map((data) => (
        <NavLi url={data.navUrl} name={data.navName} />
      ))}
    </ul>
  );
};
export default NavMenu;
