import { useState } from "react";
import styled from "styled-components";

const GaleryContainer = styled.div`
  display: flex;
  flex-direction: column; /* Organiza imagem principal e miniaturas em coluna */
  gap: 20px;

  .main-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .galery-item img {
    max-width: 100%;
    border-radius: 8px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100px;
    height: 40px;
  }
`;

const ThumbnailContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  & img {
    width: 117px;
    }
`;

const Galery = (props) => {
  const [indice, setIndice] = useState(0);

  const proximaFoto = () => {
    if (indice < props.galery.length - 1) {
      setIndice(indice + 1);
    }
  };

  const anteriorFoto = () => {
    if (indice > 0) {
      setIndice(indice - 1);
    }
  };

  return (
    <GaleryContainer>
      {/* Seção Principal: Foto em destaque e botões de navegação [4, 5] */}
      <div className="main-section">
        {/* Botão "Anterior" com visibilidade controlada: Esconde o botão quando a primeira foto está ativa (índice 0) */}
        <button onClick={anteriorFoto} style={{
            visibility: indice===0 ? 'hidden' : 'visible'
        }} >Anterior</button>
        
        <div className="galery-item">
          <img 
            src={props.galery[indice].src} 
            alt={props.galery[indice].alt} 
            // Aplica largura e altura dinâmicas via props. Essas props são definidas no array homeSlide do componente HomePage, onde cada objeto de foto inclui as propriedades largura e altura. O estilo inline é utilizado para garantir que cada imagem seja renderizada com as dimensões específicas fornecidas, permitindo uma apresentação visual consistente e adaptada às necessidades de cada foto na galeria.
          style={{width: props.galery[indice].largura, height: props.galery[indice].altura}}/>
        </div>

        {/* Botão "Próxima" com visibilidade controlada: Esconde o botão quando a última foto está ativa (índice igual ao comprimento do array - 1) */}
        <button onClick={proximaFoto} style={{
            visibility: indice===props.galery.length - 1 ? 'hidden' : 'visible'
        }}>Próxima</button>
      </div>

      {/* Renderização Condicional: Exibe miniaturas apenas se props.showThumbs existir. O props.showThumbs é uma prop booleana que controla a visibilidade das miniaturas.  */}
      {props.showThumbs && (
        <ThumbnailContainer>
          {props.galery.map((photo, index) => (
            <img
              key={index} // Chave obrigatória para listas [6]
              src={photo.src}
              alt={`Miniatura ${index}`}
              onClick={() => setIndice(index)} // Altera a imagem principal ao clicar [7, 8]
              style={{
                width: '117px',
                height: '95px',
                borderRadius: props.radius, // Aplica o arredondamento dinâmico via prop [1]
                cursor: 'pointer',
                objectFit: 'cover',
                border: indice === index ? '2px solid #007bff' : 'none',
                transition: 'border 0.3s ease-in-out' // Destaque para a miniatura ativa
              }}
            />
          ))}
        </ThumbnailContainer>
      )}
    </GaleryContainer>
  );
};

export default Galery;