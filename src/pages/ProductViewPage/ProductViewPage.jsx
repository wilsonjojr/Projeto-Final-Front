import { useParams } from "react-router-dom";

const ProductViewPage = () => {

    //O useParams é um hook do React Router que permite acessar os parâmetros da URL. No caso, estamos acessando os parâmetros "id" e "nome" que foram definidos na rota "/productViewPage/:id/:nome". Esses parâmetros são passados como props para o componente ProductViewPage, e podemos utilizá-los para exibir informações específicas do produto, como o nome e o id do produto. Por exemplo, podemos usar o id para buscar informações do produto em uma API ou banco de dados, e o nome para exibir o nome do produto na página.
    
    const {id, nome} = useParams();
    return ( 
        <div className="product-view-page">
            <h1>Product View Page Component #{id}{nome}</h1>
        </div>
     );
}
 
export default ProductViewPage;