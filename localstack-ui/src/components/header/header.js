import './header.css';

function Header() {
  return (
    <div>
      <header id="container">
        <div id="nav-bar">
          <div id="nav-belt">
            <div class="nav-left">
              <div id="nav-logo">
                <a href="/">LOGO</a>
              </div>
            </div>
            <div class="nav-fill">
              <div id="nav-search">
                <form id="nav-search-bar-form">
                  <div class="nav-left">
                    <a href="">ALL</a>
                  </div>
                  <div class="nav-fill">
                    <input type="text" />
                  </div>
                  <div class="nav-right">
                    <button type="submit">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="nav-right">
              <div id="nav-tools">
                <a href="/">Language</a>
                <a href="/">Log in</a>
                <a href="/">Cart</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
