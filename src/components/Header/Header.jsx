import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import Logo from "../Logo/Logo";
import miniCartIcon from "../../assets/mini-cart.svg"


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
            &:hover, &.active{
                color: #FFFFFF;
        }
    }
    }

    & input{
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        background-color: white;
        
    }
`;

const Header = () => {


    return (
        <HeaderContainer>
        
            <Logo />

            <input type="text" placeholder="Pesquisar produto..." />

            <nav>

                <ul>
                    <li>
                        <a>Cadastrar</a>
                    </li>
                    <li>
                        <a>Entrar</a>
                    </li>
                    <li>
                        <a>
                            <img src={miniCartIcon} alt="Mini Cart Icon" />
                        </a>
                    </li>
                </ul>
                <ul>
                    
                
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/productListingPage"}>Produtos</NavLink>
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