import styled from "styled-components";

const SectionContainer = styled.section`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    & h1 {
    font-size: 25px;
    
    
    }
`;
//props.link.text e props.link.href são as propriedades do link que estão sendo passadas para o componente Section, elas estão sendo utilizadas para criar um link dinâmico, ou seja, o texto e o href do link podem ser diferentes dependendo das propriedades passadas para o componente. O props.children é utilizado para renderizar os elementos filhos do componente Section, ou seja, tudo que estiver dentro do componente Section vai ser renderizado dentro do div que tem o props.children. Dessa forma, podemos passar qualquer conteúdo para o componente Section e ele será renderizado dentro do layout definido pelo SectionContainer. O props.children é uma propriedade especial do React que permite que um componente receba elementos filhos, ou seja, tudo que estiver dentro do componente quando ele for utilizado. Por exemplo, se utilizarmos o componente Section da seguinte forma:
const Section = (props) => {
    return ( 
        <>
        <SectionContainer>
            <div>
            <h1 style={{textAlign:props.titleAlign || 'left'}}>{props.title}</h1>
            {}
            {props.link &&(
                 <a href={props.link.href}>{props.link.text}</a>
            )}
           
            </div>
            
            <div>
                {props.children}
            </div>
        </SectionContainer>
        </>
     );
}
 
export default Section;