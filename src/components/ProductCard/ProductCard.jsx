import styled from "styled-components";
  
const ProductCardContainer = styled.div`
    background-color: #e8b9b9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px;

    & img {
        width: 100%;    
    }

    & h2 {
        font-size: 18px;
    }

    & h3 {
        font-size: 16px;
       
    }
    `;

const ProductCard = (props) => {
   // O componente ProductCard é um componente funcional que recebe as propriedades do produto, como imagem, descrição, nome, preço e preço com desconto. Ele utiliza essas propriedades para renderizar um cartão de produto com a imagem, nome e preço do produto. Se houver um preço com desconto, ele exibe o preço original riscado e o preço com desconto ao lado. Caso contrário, ele exibe apenas o preço original. O componente é estilizado usando uma classe CSS chamada "product-card".
    return (
        <ProductCardContainer>
        <div className="product-card">
            <img src={props.image} alt={props.description} />
            <h2>{props.name}</h2>
            {props.priceDiscount ? (
                <>
                    <h3 style={{ textDecoration: 'line-through' }}>R$ {props.price}</h3>
                    <h3 style={{ color: 'red' }}>R$ {props.priceDiscount}</h3>
                </>
            ) : (
                <>
                <h3>R$ {props.price}</h3>
                </>
            )}
        </div>
        </ProductCardContainer>
      );
}
 
export default ProductCard;