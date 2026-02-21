import { Link } from "react-router-dom";
import styled from "styled-components";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";

const OrdenarOptions=[
    {inputType:"checkbox", text:"Eletrônicos", value:"eletronicos"},
    {inputType:"checkbox", text:"Roupas", value:"roupas"},
    {inputType:"checkbox", text:"Acessórios", value:"acessorios"},
]

// O componente ProductListingPage é uma página que exibe uma lista de produtos. Ele inclui um filtro de ordenação, opções de filtragem por categoria e uma seção para exibir os produtos. A página utiliza o componente FilterGroup para renderizar os filtros de categoria e o componente ProductListing para renderizar a lista de produtos. Os dados dos produtos são armazenados em um array chamado ProductsPage, que é passado como prop para o componente ProductListing. A página é estilizada usando styled-components para criar um layout organizado e visualmente atraente. O array ProductsPage contém objetos que representam cada produto, incluindo informações como ID, nome, imagem, preço e preço com desconto. O componente ProductListingPage é responsável por organizar esses elementos e fornecer uma experiência de navegação para os usuários que desejam explorar os produtos disponíveis.
const ProductsPage= [
   {
     id: 1,
     name: "Nome do produto 1",
     image: "product-thumb-1.jpeg",
     price: 200,
     priceDiscount: 149.9
   },
   {
     id: 2,
     name: "Nome do produto 2",
     image: "product-thumb-2.jpeg",
     price: 49.9
   },
   {
     id: 3,
     name: "Nome do produto 1",
     image: "product-thumb-3.jpeg",
     price: 200,
     priceDiscount: 149.9
   },
   {
     id: 4,
     name: "Nome do produto 1",
     image: "product-thumb-4.jpeg",
     price: 200,
     priceDiscount: 149.9
   },
   {
     id: 5,
     name: "Nome do produto 1",
     image: "product-thumb-5.jpeg",
     price: 200,
     priceDiscount: 149.9
   },
 ]

 //O array OrdenarOptions recebe objetos que representam as opções de filtro para a categoria dos produtos.
const OrdenarContaianer =styled.div`
    
    gap: 20px;
    height: 60px;
    width: 308px;
    
    label{
        font-size: 16px;
        font-weight: bold;
        color:#474747;
    }

    select{
        padding: 10px;
        border-radius: 5px;
        color:#474747}
        
    `;


const ProductListingPage = () => {
    return ( 
        <>
        <OrdenarContaianer>
            <label htmlFor="preco">Ordenar por:</label>
            <select name="preco" id="preco">
                <option value="menor">Menor Preço</option>
                <option value="maior">Maior Preço</option>
                
            </select>
            

        </OrdenarContaianer >

        
        <div className="filtrar-por" style={{width:"308px", height:"60px"}}>
           < h2>Filtrar por</h2>
            <hr/>
        </div>

        <FilterGroup title="Categoria" options={OrdenarOptions}/>
        
        <FilterGroup title="Categoria" options={OrdenarOptions}/>

        <FilterGroup title="Categoria" options={OrdenarOptions}/>

        <Section title="Produtos" titleAlign="left">

            <ProductListing products={ProductsPage}/>

        </Section>
        </>
     );
}
 
export default ProductListingPage;