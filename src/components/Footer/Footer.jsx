import styled from "styled-components";
import Logo from "../Logo/Logo";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import Information from "../Information/Information";

const informatiosDesc = [
  {
    id: 0,
    text: "Sobre Drip Store",
    link: "/about"
  },
   {
    id: 1,
    text: "Segurança",
    link: "/security"
  },

  {
    id: 2,
    text: "Wishlist",
    link: "/wishilist"
  },

  {
    id: 3,
    text: "Blog",
    link: "/blog"
  },

  {
    id: 4,
    text: "Trabalhe conosco",
    link: "/work"
  },

  {
    id: 5,
    text: "Meus Pedidos",
    link: "/myList"
  },
  
]

const categoryInfos = [
  {
    id: 0,
    text: "Camisetas",
    link: "/shirts"
  },
   {
    id: 1,
    text: "Calças",
    link: "/legs"
  },

  {
    id: 2,
    text: "Bonés",
    link: "/cap"
  },

  {
    id: 3,
    text: "Headphones",
    link: "/headphones"
  },

  {
    id: 4,
    text: "Tênis",
    link: "/tenis"
  },

  
]

const contactInfos = [
  {
    id: 0,
    text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161",
    link: "/location"
  },
   {
    id: 1,
    text: "(85) 3051-3411",
    link: "/number"
  },

  
]

const Footer = () => {

    const FooterContainer = styled.footer`
    background-color:#1F1F1F;
    display: flex;
    flex-direction: row;
    

    & h3{
        color:#ffffff;
        width: 200px;
        font-size: 16px;

        

    }
    
    `;

    return (
        <FooterContainer>
                <Logo/>
                
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo libero deserunt modi. Sunt rem reprehenderit, minima nam velit enim exercitationem molestias aspernatur dolorem molestiae magni sequi, praesentium nihil. Culpa, numquam.</h3>

                <div>
                    <img src={FacebookIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                    <img src={TwitterIcon} alt="" />
                </div>

                <Information title={"Contatos"} informations = {informatiosDesc}/>

                <Information title ="Categorias" informations = {categoryInfos}/>

                <Information title ="Contato" informations = {contactInfos}/>
        </FooterContainer>
      );
}
 
export default Footer;