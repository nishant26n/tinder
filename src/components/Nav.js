import whiteLogo from "../images/white-tinder-logo.png";
import colorLogo from "../images/tinder-logo.png";

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whiteLogo} alt="" />
      </div>

      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
