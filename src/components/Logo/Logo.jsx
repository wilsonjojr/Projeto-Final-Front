import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/logo-header.svg"
import logoFooter from "../../assets/logo-footer.svg"
import styled from "styled-components";

const LogoContainer = styled.div`
`;
const Logo = (props) => {
    return (
        <>
        <NavLink to={"/"}>
            <img 
                    /* Se props.logo for igual a "header", usa logoHeader. 
                       Caso contrário (else), usa logoFooter */
                    src={props.logo === "header" ? logoHeader : logoFooter} 
                    alt="Logo" 
                    style={{ width: "253px", height: "44px", display: "block" }} 
                />
        </NavLink>
        </>
      );
}
 
export default Logo;