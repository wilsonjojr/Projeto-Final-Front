import styled from "styled-components";

const FilterGroup = (props) => {

    const FiltroContaianer =styled.div`
    background-color:#FFFFFF;
    width: 308px;
    display: flex;
    align-items: left;
    flex-direction: column;
    & h1{
        font-size: 14px;
        
    }
    & label{
        font-size: 14px;
        color:#474747;

    }
    & input{
        margin-right: 10px;
    }


    `;
    return (
        <FiltroContaianer >
            <h1>{props.title}</h1>
            {props.options.map((option) => (
                
                <>

                    <input type={option.inputType} name="" id={option.value} />
                    <label htmlFor={option.value}>{option.text}</label>
                
                </>
                
            ))}
            </FiltroContaianer>
            
        
        
      );
}
 
export default FilterGroup;