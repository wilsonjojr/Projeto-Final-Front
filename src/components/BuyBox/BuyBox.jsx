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
    `;

const BuyBox = (props) => {
    return (
        <BuyBoxContainer>
            <h1>{props.name}</h1>
            <h2>{props.reference}</h2>
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
                
            </div>
        </BuyBoxContainer>
      );
}
 
export default BuyBox;
