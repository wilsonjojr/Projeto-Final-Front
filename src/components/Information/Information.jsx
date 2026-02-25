import styled from "styled-components";

const InformationContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

h1{
    color: #FFFFFF;
}

& a{
     text-decoration: none;
     color: #FFFFFF;

}
`;

const Information = (props) => {

    
    return ( 
        <InformationContainer>
            <h1>{props.title}</h1>
            {props.informations.map(information => (
                <a key ={information.id} href={information.link}>{information.text}</a>
            ))}
            
        </InformationContainer>
     );
}
 
export default Information;