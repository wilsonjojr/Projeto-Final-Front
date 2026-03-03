import styled from "styled-components";

const OptionsContainer = styled.div`
display: flex;
gap: 20px;

& input[type="checkbox"] {
    width: 20px;
    border-radius: ${props => props.radius};
}
`;

const ProductOptions = (props) => {

    return ( 
        <OptionsContainer>
            
            {props.options.map(option => (
                <input key={option.id} type="color" value={option.name} style={{borderRadius:{}, backgroundColor:option.name, color: option.name}} readOnly></input>
            ))}
            
            
        </OptionsContainer>
     );
}
 
export default ProductOptions;