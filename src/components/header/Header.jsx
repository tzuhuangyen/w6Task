import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="container-lg d-flex align-items-center justify-content-between">
            {/*<!-- logo+search+search icon-->*/}
            <div className="logo-search d-flex justify-content-between align-items-center">
              {/*<!-- logo -->*/}
              <h1 className="logo d-flex align-items-center animate__animated animate__backInLeft animate__slow">
                <a href="index.html">
                  <img src="../../images/Logo.png" alt="logo" /> Pets snack
                </a>
              </h1>
              {/*<!-- //search+search icon -->*/}
              <div className="search d-flex align-items-center">
                <form className="d-flex d-none d-md-block">
                  <input
                    className="form-control"
                    type="search"
                    aria-label="Search"
                    placeholder="  ^ↀᴥↀ^ what are you looking for?"
                  />
                </form>
                {/*<!-- search icon -->*/}
                <a className="searchIcon material-symbols-outlined">
                  {" "}
                  <i className="fas fa-search" style={{ color: "#f2f2f2" }}></i>
                </a>
              </div>
            </div>

            {/*<!-- navbar+漢堡選單按鈕+dropdown menu  -->*/}
            <div className="d-flex justify-content-between">
              {/*<!-- navbar-->*/}
              <nav className="navbar navbar-expand-lg navbar-light">
                <div
                  className="collapse navbar-collapse d-lg-block"
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        aria-current="page"
                        href="index.html"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="products.html">
                        Shop
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="blog.html">
                        Blog{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/*<!-- 漢堡選單按鈕+dropdown menu -->*/}
              {/*<!-- 漢堡選單按鈕 -->*/}
              <div>
                <a
                  className="navBtn d-lg-none dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="material-symbols-outlined material-icons md-40">
                    menu
                  </span>
                </a>
                {/*<!-- dropdown menu -->*/}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="index.html">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="products.html">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*<!-- END navbar+漢堡選單按鈕+dropdown menu  -->*/}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
