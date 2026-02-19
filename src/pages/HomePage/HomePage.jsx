import ProductListing from '../../components/ProductListing/ProductListing';
import Section from '../../components/Section/Section';

const HomePage = () => {
    // Exemplo de lista de produtos para o seu ProductListing. Você pode substituir isso por dados reais ou mockados conforme necessário. Cada produto tem um nome, imagem, preço e opcionalmente um preço com desconto. Essa estrutura de dados é compatível com as props esperadas pelo componente ProductCard, que é utilizado dentro do ProductListing para exibir cada produto de forma organizada.
    const produtosDestaque = [
        { name: "Tênis Esportivo",
         image: "/public/product-image-1.jpg", price: "150.00" },
        { name: "Camiseta Social",
         image: "/public/product-image-2.jpg", price: "80.00", priceDiscount: "60.00" },
        { name: "Relógio de Pulso",
         image: "/public/product-image-3.jpg", price: "200.00" },
    ];

    return ( 
        <div className="home-page">
            <h1>Home Page Component</h1>

            {/* Primeira Seção: Apenas título e link */}
            <Section 
                title="Section Title" 
                link={{ text: "Show More", href: "/productListingPage" }} 
            />

            {/* Terceira Seção: Usando ABERTURA e FECHAMENTO para o children */}
            <Section 
                title="Third Section"
                link={{ text: "View Details", href: "/productViewPage/1/Tenis" }}
            >
                {/* 
                   Aqui entra o props.children! 
                   Usamos o ProductListing para organizar os cards. O "produtosDestaque" é passado como props para o ProductListing, que por sua vez renderiza um ProductCard para cada produto na lista. Dessa forma, os produtos são exibidos dentro da seção, seguindo o layout definido pelo SectionContainer.
                */}
                <ProductListing products={produtosDestaque} />
            </Section>
            <Section 
                title="Second Section" 
                link={{ text: "Show More", href: "/productListingPage" }}
                children={<ProductListing products={produtosDestaque} />}
            />
        </div>
     );
}

export default HomePage;