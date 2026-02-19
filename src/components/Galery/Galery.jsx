import styled from "styled-components";

const GaleryContainer= styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`;

const Galery = (props) => {
    return ( 
        
        <GaleryContainer>
            {/* O componente Galery recebe um array de fotos através das props e renderiza cada foto em um layout flexível. Cada foto é exibida dentro de um contêiner com a classe "galery-item", que pode ser estilizado para definir o tamanho e a aparência das imagens. O uso do map permite iterar sobre o array de fotos e criar um elemento para cada uma, garantindo que todas as fotos sejam exibidas de forma organizada e responsiva. O texto alternativo (alt) é utilizado para melhorar a acessibilidade, fornecendo uma descrição da imagem para leitores de tela e para casos em que a imagem não possa ser carregada. */}
            {props.galery.map((photo, index) => (
            <div key={index} className="galery-item">
                <img src={photo.src} alt={photo.alt} />
            </div>
        ))}
        </GaleryContainer>
     );
}
 
export default Galery