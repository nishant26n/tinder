import whiteLogo from "../images/white-tinder-logo.png";
import colorLogo from "../images/tinder-logo.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="" />
      </div>

      {!authToken && !minimal && <button className="nav-button">Log in</button>}
    </nav>
  );
};

export default Nav;
