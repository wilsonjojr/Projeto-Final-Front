import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const PageLayout = () => {
    return ( 
        //Sempre que tiver um layout, tem que ter o Outlet, para renderizar os componentes filhos; Tudo que estiver dentro do Outlet, vai ser renderizado dentro do layout, ou seja, o Header e o Footer vão estar presentes em todas as páginas que utilizarem esse layout.
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
     );
}
 
export default PageLayout;