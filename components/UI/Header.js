import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="js-site-nav site-nav lazyloading-hidden">
      <div className="site-nav-container">
        <Menu />
        <ul className="site-nav-actions">
          <li className="js-site-nav-search site-nav-actions-item site-nav-desktop-only">
            <a className="#" href="search.html">
              <i className="fa fa-search"></i>
              <span className="accessibility-text">Search</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
