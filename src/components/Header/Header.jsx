import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color:gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    font-family: Arial, Helvetica, sans-serif;
    & h1{
        color: white;
    }
    & nav ul{
        display: flex; 
        gap:36px; 
        list-style: none;
        & li a{
            color: #FFFFFF70;
            text-decoration: none;
            font-size: 16px;
            &:hover, &:active{
                color: #FFFFFF;
        }
    }
    }
`;

const Header = () => {


    return (
        <HeaderContainer>
        
            <h1>Logo</h1>
        
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/productViewPage"}>Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categorias"}>Categorias</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/meus-pedidos"}>Meus Pedidos</NavLink>
                    </li>
                </ul>
            </nav>
        
    </HeaderContainer>
      );
}
 
export default Header;