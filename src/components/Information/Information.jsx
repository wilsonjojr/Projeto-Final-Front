import styled from "styled-components";

const InformationContainer = styled.div`

`;

const Information = (props) => {

    
    return ( 
        <InformationContainer>
            <h1>{props.title}</h1>
            <h2>{props.informations}</h2>
        </InformationContainer>
     );
}
 
export default Information;