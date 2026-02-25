import styled from "styled-components";
import Logo from "../Logo/Logo";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TwitterIcon from "../../assets/twitter.svg";
import Information from "../Information/Information";

const InformatiosDesc = [
  {
    text: "Sobre Drip Store",
    link: "/about"
  },
  {
    text: "Blog",
    link: "/blog"
  },
  
]


const Footer = () => {

    const FooterContainer = styled.div`
    background-color:#1F1F1F;
    display: flex;
    flex-direction: column;

    & h3{

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

                <Information title={"Contatos"} informatios = {InformatiosDesc}/>
        </FooterContainer>
      );
}
 
export default Footer;