const Navbar = () => (
  <nav>
    <a href="index.html">
      <img src="/images/logo.png" />
    </a>
    <div className="nav-links" id="navLinks">
      <i className="fa fa-times" onClick="hideMenu()"></i>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT US</a>
        </li>
        <li>
          <a href="course.html">COURSE</a>
        </li>
        <li>
          <a href="blog.html">BLOG</a>
        </li>
        <li>
          <a href="contact.html">CONTACT</a>
        </li>
      </ul>
    </div>
    <i className="fa fa-bars" onClick="showMenu()"></i>
  </nav>
);

export default Navbar;
