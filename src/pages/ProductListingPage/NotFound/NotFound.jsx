import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <h1>404 - Página Não Encontrada</h1>
        <Link to={"/"}>Voltar para a Home</Link>
        </>
     );
}
 
export default NotFound;