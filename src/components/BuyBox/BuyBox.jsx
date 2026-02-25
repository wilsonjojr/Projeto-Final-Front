import styled from "styled-components";
import starIcon from "../../assets/star-icon.svg"

const BuyBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h1 {
        font-size: 32px;
        color: #1F1F1F;
        
    }

    & h2 {
        font-size: 12px;
        color: #666666;
    }

    & h4{
        font-size: 14px;
    }

    &button{
        font-size: 16px;
        color: #F6AA1C;
    }
    `;

const BuyBox = (props) => {
    return (
        <BuyBoxContainer>
            <h1>{props.name}</h1>
            <h2>{props.reference}</h2>
             <h1>{props.preco}</h1>
            <div>
                {/* 1. Criamos um array fixo de 5 posições */}
                {Array.from({ length: 5 }, (_, i) => (
                    <img 
                        key={i} // Chave única para a lista [3]
                        src={starIcon} 
                        alt="Star Icon" 
                        style={{ 
                            /* 2. Lógica: se o índice 'i' for menor que a nota, a estrela fica colorida. 
                               Caso contrário, aplicamos um filtro para parecer vazia [3, 4] */
                            filter: i < props.stars ? 'none' : 'grayscale(100%) opacity(0.3)',
                            backgroundColor: i < props.stars ? '#F6AA1C' : 'transparent',
                            borderRadius: '4px',
                            marginRight: '2px'
                        }}
                    />
                ))}
                {/* Exibindo os dados numéricos [5, 6] */}
                <span>{props.rating}({props.avaliation} avaliações)</span>
                {props.priceDiscount ? (
                <div>
                    <h3 style={{ textDecoration: 'line-through' }}>R$ {props.price}</h3>
                    <h3 style={{ color: 'red' }}>R$ {props.priceDiscount}</h3>
                    
                </div>
            ) : (
                <>
                <h3>R$ {props.price}</h3>
                </>
            )}

            <h4>{props.description}</h4>
            <div>
                {props.children}
            </div>

            <button>Comprar</button>
            </div>
            
        </BuyBoxContainer>
        
      );
}
 
export default BuyBox;
