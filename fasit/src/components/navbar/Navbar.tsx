import zoolandoLogo from "../../assets/zoolando.png";
import NavSearch from "./NavSearch";
import NavbarMenu from "./NavbarMenu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="nav-container container w-100">
        <div className="" aria-label="Logo">
          <img
            className="logo"
            src={zoolandoLogo}
            onClick={navigateToHome}
            alt="Zoolando logo"
          />
        </div>
        <NavSearch />
        <NavbarMenu />
      </div>
    </nav>
  );
};

export default Navbar;
