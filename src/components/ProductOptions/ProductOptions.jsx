const ProductOptions = (props) => {
    
    return ( 
        <div className="product-options">
            <option value={props.options.map(option => option.name)}></option>
           
            <h1>{props.radius}</h1>
            <h1>{props.shape}</h1>
            
        </div>
     );
}
 
export default ProductOptions;