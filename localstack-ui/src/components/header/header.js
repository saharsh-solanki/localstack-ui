import './header.css';
import amazonIcon from '../../assests/icons/amazonIcon.png';
import iconSearch from '../../assests/icons/iconSearch.png';

function Header() {
  return (
    <div>
      <header id="container">
        <div id="nav-bar">
          <div id="nav-belt">
            <div className="nav-left">
              <div id="nav-logo">
                <img className='img-logo logo pl-1' src={amazonIcon}></img>
              </div>
            </div>
            <div className="nav-fill">
              <div id="nav-search">
                <form id="nav-search-bar-form">
                <img src={iconSearch} className='logo' ></img>
                    <input type="text" placeholder='Search' />
                  <div className="nav-right">
                  </div>
                </form>
              </div>
            </div>
            <div className="nav-right">
              <div id="nav-tools" className='text-align-center m-auto'>
                <div className='text-white text-bold'>
                  <a href='#'>
                    saharsh.solanki@working.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
