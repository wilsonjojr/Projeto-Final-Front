import ProductCard from '../../components/ProductCard/ProductCard';
import Section from '../../components/Section/Section';



const HomePage = () => {
    return ( 
        <div className="home-page">
            <h1>Home Page Component</h1>
            <Section 
            
            title="Section Title" 
            link ={{
                text: "Show More",
                href: "/productListingPage"

            }} />

            <Section 
            title="Another Section"/>
            <Section 
            title="Third Section"
            link ={{
                text: "View Details",
                href: "/productViewPage/1/Tenis"

            }} 
            children ={
                <>
                <ProductCard 
                    image="/public/product-image-1.jpg" 
                    description="Tênis esportivo" name="Tênis Esportivo" price="150.00"/>

                <ProductCard 
                    image="/public/product-image-2.jpg" 
                    description="Camiseta social" name="Camiseta Social" price="80.00" priceDiscount="60.00"/>

                </>
                
                    } />

        </div>
     );
}
 
export default HomePage;