import RouteWithTitleUpdate from "../../../RouterWithTitleUpdate/RouterWithTitleUpdate";
import Footer from "../../../Utils/Components/Footer";
import Navbar from "../../../Utils/Components/Navbar";
import AllServices from "../Components/AllServices";
// import AllServices from "../Components/AllServices";
import Banner from "../Components/Banner";

const Home = () => {
    return (
        <RouteWithTitleUpdate element={

        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-4xl">this is the home</h1>
            <Banner></Banner>
            <AllServices></AllServices>
            <Footer></Footer>
        </div>
        } title="Home" />
    );
};

export default Home;