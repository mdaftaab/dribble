import Link from "next/link";
import NavMenu from "./NavMenu";

const Nav = () => {
  const navList = [
    {
      navName: "Discover",
      navUrl: "/",
    },
    {
      navName: "Animation",
      navUrl: "/Animation",
    },
    {
      navName: "Branding",
      navUrl: "/Branding",
    },
    {
      navName: "Illustration",
      navUrl: "/Illustration",
    },
    {
      navName: "Mobile",
      navUrl: "/Mobile",
    },
    {
      navName: "Print",
      navUrl: "/Print",
    },
    {
      navName: "Product Design",
      navUrl: "/ProductDesign",
    },
  ];

  return (
    <div className="hero-categories filter-categories js-filter-categories js-shot-categories">
      <span className="scroll scroll-backward">
        <Link href="">
          <a className="d-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              className="icon "
            >
              <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
            </svg>
          </a>
        </Link>
      </span>
      <span className="scroll scroll-forward">
        <Link href="">
          <a className="d-none">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              role="img"
              className="icon "
            >
              <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
            </svg>
          </a>
        </Link>
      </span>
      <NavMenu navList={navList} />
    </div>
  );
};

export default Nav;
