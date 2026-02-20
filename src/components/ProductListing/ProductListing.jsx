import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

const ProductListingContainer = styled.div`

gap: 20px;
justify-content: center;
align-items: center;


& ul {
    list-style: none; 
}

& li {
    margin: 10px; 
  
  }


`;

const ProductListing = (props) => {

    // O componente ProductListing é um componente funcional que recebe uma lista de produtos através das props. Ele utiliza o método map para percorrer a lista de produtos e renderizar um componente ProductCard para cada produto. Cada ProductCard recebe as propriedades do produto, como nome, imagem, preço e preço com desconto, para exibir as informações do produto de forma organizada. O layout dos cards é definido pelo ProductListingContainer, que utiliza flexbox para organizar os cards em uma grade responsiva.
  return (
    <ProductListingContainer>
    <div >
      {/* 
        Utilizamos props.products.map para percorrer o array e 
        criar um componente ProductCard para cada item da lista [2]
      */}
      {props.products.map((product, index) => (
        <ul key={index}>
         <li><ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description} // Usando a descrição do produto para o alt da imagem
        /></li>
        </ul>
      ))}
    </div>
    </ProductListingContainer>
  );
};

export default ProductListing;