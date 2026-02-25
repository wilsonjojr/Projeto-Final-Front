import styled from "styled-components";

const SectionContainer = styled.section`
    background-color: #F9F8FE;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    

   & .title-head{
        display:flex;
        align-items: center; 
        justify-content: space-between; 
        margin-bottom: 20px;
       
    }

    & .title-section {
    font-size: 24px;
    color: #474747;
    margin: 0;
    flex: 1;
    
    
    }

    .link{
        text-decoration: none;
        color: #C92071;
        font-size: 18px;
        margin-left: 20px;
        white-space: nowrap; /* Impede que o link quebre linha */
    }




`;
//props.link.text e props.link.href são as propriedades do link que estão sendo passadas para o componente Section, elas estão sendo utilizadas para criar um link dinâmico, ou seja, o texto e o href do link podem ser diferentes dependendo das propriedades passadas para o componente. O props.children é utilizado para renderizar os elementos filhos do componente Section, ou seja, tudo que estiver dentro do componente Section vai ser renderizado dentro do div que tem o props.children. Dessa forma, podemos passar qualquer conteúdo para o componente Section e ele será renderizado dentro do layout definido pelo SectionContainer. O props.children é uma propriedade especial do React que permite que um componente receba elementos filhos, ou seja, tudo que estiver dentro do componente quando ele for utilizado. Por exemplo, se utilizarmos o componente Section da seguinte forma:
const Section = (props) => {
    return ( 
        <>
        <SectionContainer>
        <div className="title-head">
            <h1 style={{textAlign:props.titleAlign || 'left'}} className="title-section">{props.title}</h1>
            
            {props.link &&(
                 <a href={props.link.href} className="link">{props.link.text}</a>
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