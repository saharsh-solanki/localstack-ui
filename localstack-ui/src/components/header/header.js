import './header.css';

function Header() {
  return (
    <div>
      <header id="container">
        <div id="nav-bar">
          <div id="nav-belt">
            <div className="nav-left">
              <div id="nav-logo">
                <button>LOGO</button>
              </div>
            </div>
            <div className="nav-fill">
              <div id="nav-search">
                <form id="nav-search-bar-form">
                  <div className="nav-left">
                    <button href="">ALL</button>
                  </div>
                  <div className="nav-fill">
                    <input type="text" />
                  </div>
                  <div className="nav-right">
                    <button type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="nav-right">
              <div id="nav-tools">
                <button>Language</button>
                <button>Log in</button>
                <button>Cart</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
