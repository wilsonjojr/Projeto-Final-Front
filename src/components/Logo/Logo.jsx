import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo-header.svg"
const Logo = () => {
    return (
        <>
        <NavLink to={"/"}>
            <img src={logoHeader} alt="Logo" style={{ width: "253px", height: "44px", display: "block" }} />
        </NavLink>
        </>
      );
}
 
export default Logo;