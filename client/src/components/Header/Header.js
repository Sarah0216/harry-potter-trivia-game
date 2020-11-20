import "./Header.scss";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header>
      <img className="header-logo" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
