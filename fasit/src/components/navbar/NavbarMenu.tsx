import userIcon from "../../assets/user.svg";
import CartButton from "../cart/CartButton";

const NavbarMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-icon">
        <img src={userIcon} alt="Shopping bag icon" />
      </div>
      <CartButton />
    </div>
  );
};

export default NavbarMenu;
