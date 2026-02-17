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

            }} />

        </div>
     );
}
 
export default HomePage;