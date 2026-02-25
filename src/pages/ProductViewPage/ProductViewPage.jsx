import { useParams } from "react-router-dom";
import Galery from '../../components/Galery/Galery';
import Section from "../../components/Section/Section";
import ProductOptions from "../../components/ProductOptions/ProductOptions";
import BuyBox from "../../components/BuyBox/BuyBox";
import ProductsPage from "../ProductListingPage/ProductListingPage";



const homeSlide2=[
        {src: "/public/home-slide-1.jpeg", alt: "Slide 1", largura:'700px', altura:'570px', radius:'4px'},
        {src: "/public/home-slide-2.jpeg", alt: "Slide 2", largura:'700px', altura:'570px', radius:'4px'},
        {src: "/public/home-slide-3.jpeg", alt: "Slide 3", largura:'700px', altura:'570px', radius:'4px'},
        {src: "/public/home-slide-4.jpeg", alt: "Slide 4", largura:'700px', altura:'570px', radius:'4px'},
        {src: "/public/home-slide-5.jpeg", alt: "Slide 5", largura:'700px', altura:'570px', radius:'4px'},
        {src: "/public/home-slide-6.jpeg", alt: "Slide 6", largura:'700px', altura:'570px', radius:'4px'},
    ]

    const optionsColors=[
        {id:1, name:'Red', radius:'4px', shape:'square'},
        {id:2, name:'Green', radius:'4px', shape:'square'},
        {id:3, name:'Blue', radius:'4px', shape:'square'},
        {id:4, name:'Yellow', radius:'4px', shape:'square'},
        {id:5, name:'Black', radius:'4px', shape:'square'},
        {id:6, name:'White', radius:'4px', shape:'square'},
    ]

    

const ProductViewPage = () => {

    //O useParams é um hook do React Router que permite acessar os parâmetros da URL. No caso, estamos acessando os parâmetros "id" e "nome" que foram definidos na rota "/productViewPage/:id/:nome". Esses parâmetros são passados como props para o componente ProductViewPage, e podemos utilizá-los para exibir informações específicas do produto, como o nome e o id do produto. Por exemplo, podemos usar o id para buscar informações do produto em uma API ou banco de dados, e o nome para exibir o nome do produto na página.
    
    const {id, nome} = useParams();
    return ( 
        <div>
            <h1>Product View Page Component #{id}{nome}</h1>
        <Galery galery={homeSlide2} showThumbs={true}/>
        
        <BuyBox name={nome} reference={`REF-${id}`} stars={4} rating={4.5} avaliation={120} price={"120.00"} priceDiscount={"100,00"} description={"Lorem dsfkjns sklfjdsklfj sfklsdf sklk kk slsd lkdmsk mkldsmkm mklsmd mk smdk msklmdm klsd"}>
            <ProductOptions options={optionsColors} radius={'4px'} shape={'square'}/>
        </BuyBox>
        
        <Section title>

        </Section>
        
        </div>
        
        
     );
}
 
export default ProductViewPage;