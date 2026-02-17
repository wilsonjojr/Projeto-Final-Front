import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { InputText } from 'primereact/inputtext';
import Logo from "../Logo/Logo";
import miniCartIcon from "../../assets/mini-cart.svg"

//Header é um componente que vai ser utilizado em todas as páginas do site, por isso ele fica dentro do layout, para que ele seja renderizado em todas as páginas. O Header tem um logo, um campo de pesquisa e um menu de navegação. O menu de navegação tem dois tipos de links: os links de navegação, que levam para outras páginas do site, e os links de ação, que são para ações como cadastrar, entrar e acessar o carrinho. O NavLink é utilizado para os links de navegação, pois ele tem a funcionalidade de adicionar a classe "active" ao link quando ele está ativo, ou seja, quando a página atual é a mesma do link. Isso permite que o link fique destacado quando o usuário estiver na página correspondente. "&" é utilizado para estilizar os elementos filhos do HeaderContainer, ou seja, o h1, o nav ul e o input. O "&" é uma forma de referenciar o elemento pai no styled-components, permitindo que você escreva estilos para os elementos filhos de forma mais organizada e legível.
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