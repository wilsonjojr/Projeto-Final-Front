import { Link } from "react-router-dom";

const ProductListingPage = () => {
    return ( 

        <>
        <h1>Product Listing Page</h1>
        <ul>
            <li><Link to={"/productViewPage/1/Tenis"}>Tenis</Link></li>
            <li><Link to={"/productViewPage/2/Camisa"}>Camisa</Link></li>
            <li><Link to={"/productViewPage/3/Oculos"}>Oculos</Link></li>
            <li><Link to={"/productViewPage/4/Calça"}>Calça</Link></li>
            <li><Link to={"/productViewPage/5/Bermuda"}>Bermuda</Link></li>
        </ul>
        </>
     );
}
 
export default ProductListingPage;