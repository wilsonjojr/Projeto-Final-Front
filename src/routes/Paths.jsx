import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/ProductListingPage/HomePage/HomePage";
import ProductViewPage from "../pages/ProductListingPage/ProductViewPage/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../pages/ProductListingPage/NotFound/NotFound";


const Paths = () => {
    return ( 
        //Sempre que tiver um layout, tem que ter o Outlet, para renderizar os componentes filhos; Tudo que estiver dentro do Outlet, vai ser renderizado dentro do layout, ou seja, o Header e o Footer vão estar presentes em todas as páginas que utilizarem esse layout. Como o HomePage e o ProductViewPage estão dentro do Route do PageLayout, eles vão ser renderizados dentro do layout, ou seja, com o Header e o Footer.
    <>
    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<PageLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/productViewPage" element={<ProductViewPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
        
        
        
    </BrowserRouter>
    </> 
    );
}
 
export default Paths;