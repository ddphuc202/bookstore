import Header from "../../components/Customer/Header";
import PostBanner from "../../components/Customer/PostBanner";
import Footer from "../../components/Customer/Footer";
import NewBooks from "../../components/Customer/NewBooks";
import AboutPage from "../../components/Customer/AboutPage";
import '../../styles/Header.css';
import '../../styles/PostBanner.css';
import '../../styles/NewBooks.css';
import '../../styles/Footer.css';

const HomePage = (props) =>{
    return(
        <>
        <Header />
        <PostBanner />
        <NewBooks />
        <AboutPage />
        <Footer />
        </>
    )
}
export default HomePage;