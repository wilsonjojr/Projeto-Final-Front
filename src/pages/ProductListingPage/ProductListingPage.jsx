import { Link } from "react-router-dom";
import styled from "styled-components";

const FiltroContaianer =styled.div`
    
    gap: 20px;
    height: 308px;
    width: 60px;
    
    label{
        font-size: 16px;
        font-weight: bold;
        color:#474747;
    }

    select{
        padding: 10px;
        border-radius: 5px;
        color:#474747}
    `;

const ProductListingPage = () => {
    return ( 
        <FiltroContaianer>
            <label htmlFor="preco">Ordenar por:</label>
            <select name="preco" id="preco">
                <option value="menor">Menor Preço</option>
                <option value="maior">Maior Preço</option>
                
            </select>
            
        </FiltroContaianer>
     );
}
 
export default ProductListingPage;