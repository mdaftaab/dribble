import Link from "next/link";
const Menu = () => {
  return (
    <nav className="site-nav-desktop-only align-center" aria-label="primary">
      <div data-site-nav-category="Top Nav">
        <Link href="/">
          <a>Dribble</a>
        </Link>
      </div>
      <ul className="site-nav-desktop-nav">
        <li className="site-nav-desktop-item site-nav-hover-item">
          <Link href="/Inspiration">
            <a>Inspiration</a>
          </Link>
        </li>
        <li className="site-nav-desktop-item site-nav-hover-item">
          <Link href="/FindWork">
            <a>Find Work</a>
          </Link>
        </li>
        <li className="site-nav-desktop-item site-nav-hover-item">
          <Link href="/LearnDesign">
            <a>Learn Design</a>
          </Link>
        </li>
        <li className="site-nav-desktop-item site-nav-hover-item">
          <Link href="/GoPro">
            <a>Go Pro</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
